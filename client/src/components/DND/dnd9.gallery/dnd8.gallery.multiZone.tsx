"use client";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import {
  useGetGalleryImagesQuery,
  useDeleteGalleryImageMutation,
} from "@/REDUX&AXIOS/api/apiSlice";
import SortableImage from "./utils/sortable.image";
import DroppableZone from "./utils/useDroppableZone";
// import { GalleryImage } from "../dnd8.gallery/dnd8.gallery";

// export type GalleryImage = { id: string; imageUrl: string; order: number };



export type GalleryImage = {
    id: string;
    imageUrl: string;
    order: number
}

export default function Gallery() {
  const [containers, setContainers] = useState<{
    [key: string]: GalleryImage[];
  }>({
    zone1: [],
    zone2: [],
    zone3: [],
  });
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const { data, isLoading } = useGetGalleryImagesQuery();
  const [deleteImage] = useDeleteGalleryImageMutation();

  const imgs = data?.images;

  useEffect(() => {
    if (imgs) {
      setContainers({
        zone1: imgs.slice(0, 3),
        zone2: imgs.slice(3, 6),
        zone3: imgs.slice(6),
      });
    }
  }, [imgs]);

  // Use PointerSensor with a distance constraint to prevent accidental drags
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
  );

  const findContainer = (id: string) => {
    if (id in containers) return id;
    return Object.keys(containers).find((key) =>
      containers[key].some((item) => item.id === id),
    );
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const container = findContainer(active.id as string);
    if (!container) return;
    const image = containers[container].find((i) => i.id === active.id);
    setActiveImage(image ?? null);
  };

  // THIS is the key — update state DURING drag for live preview
  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId);

    if (!activeContainer || !overContainer) return;
    if (activeContainer === overContainer) return; // this is fine — keep it

    setContainers((prev) => {
      const activeItems = [...prev[activeContainer]];
      const overItems = [...prev[overContainer]];
      const activeIndex = activeItems.findIndex((i) => i.id === activeId);
      const item = activeItems[activeIndex];

      if (!item) return prev; // guard against double-firing

      // Already moved? prevent duplicate
      const alreadyInOver = overItems.some((i) => i.id === activeId);
      if (alreadyInOver) return prev;

      const isOverAContainer = overId in prev;
      const overIndex = isOverAContainer
        ? overItems.length
        : overItems.findIndex((i) => i.id === overId);

      const insertAt = overIndex >= 0 ? overIndex : overItems.length;
      const newOverItems = [...overItems];
      newOverItems.splice(insertAt, 0, item);

      return {
        ...prev,
        [activeContainer]: activeItems.filter((i) => i.id !== activeId),
        [overContainer]: newOverItems,
      };
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveImage(null);
    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId);

    if (!activeContainer || !overContainer) return;

    // Cross-container already handled in onDragOver
    if (activeContainer !== overContainer) return;

    // Same container → reorder
    setContainers((prev) => {
      const items = prev[activeContainer];
      const oldIndex = items.findIndex((i) => i.id === activeId);
      const newIndex = items.findIndex((i) => i.id === overId);

      if (oldIndex === newIndex) return prev; // no change

      return {
        ...prev,
        [activeContainer]: arrayMove(items, oldIndex, newIndex),
      };
    });
  };

  async function handleDelete(id: string) {
    await deleteImage(id);
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Drag to Reorder</h2>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners} // closestCorners works better for zones
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}>
        <div className="flex flex-col gap-4">
          {Object.entries(containers).map(([zoneId, items]) => (
            <DroppableZone key={zoneId} id={zoneId} >
              <SortableContext
                items={items.map((img) => img.id)}
                strategy={rectSortingStrategy}>
                {items.map((img) => (
                  <SortableImage
                    key={img.id}
                    image={img}
                    onDelete={handleDelete}
                  />
                ))}
              </SortableContext>
            </DroppableZone>
          ))}
        </div>

        {/* DragOverlay renders a floating copy while dragging */}
        <DragOverlay>
          {activeImage ? (
            <img
              src={activeImage.imageUrl}
              alt=""
              className="w-full h-32 object-cover rounded shadow-xl opacity-90"
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
