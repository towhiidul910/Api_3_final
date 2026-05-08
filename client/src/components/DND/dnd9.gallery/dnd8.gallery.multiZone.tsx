// notes\gallery-dnd-explained.md
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

export type GalleryImage = {
  id: string;
  imageUrl: string;
  order: number;
};

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
  // Drag starts only after moving 5px
  // Prevents accidental clicks becoming drags
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
  );

  // const findContainer = (id: string) => {
  //   if (id in containers) return id;

  //   return Object.keys(containers).find((key) =>
  //     containers[key].some((item) => item.id === id),
  //   );
  // };

  const findContainer = (id: string) => {
    // gives use the value which container im hovering over to, even if it image im hovering over give the image location
    if (id in containers) return id; // id / key

    for (const key in containers) {
      if (containers[key].some((item) => item.id === id)) {
        return key;
      }
    }

    return undefined;
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;

    // `active` = DnD Kit's metadata object for the draggable item
    // currently being dragged.
    //
    // Important:
    // `active` is NOT the actual GalleryImage object.
    //
    // It contains drag-related metadata like:
    // {
    //   id: "a2",
    //   data: { current: ... },
    //   rect: ...,
    // }
    //
    // Only `active.id` matches your GalleryImage.id.
    //
    // We later use this id to:
    // - find the image
    // - find its container
    // - move it between zones
    // - render the drag overlay preview

    const container = findContainer(active.id as string);

    // Find which zone/container currently owns this image
    //
    // Example:
    // active.id = "a2"
    //
    // findContainer("a2") → "zone1"

    if (!container) return;

    const imageG = containers[container].find(
      (GImage) => GImage.id === active.id,
    );

    // Find the full GalleryImage object
    // from the container using the dragged image id
    //
    // Example result:
    // {
    //   id: "a2",
    //   imageUrl: "/img2.jpg",
    //   order: 2
    // }

    setActiveImage(imageG ?? null);

    // Store the dragged image in React state.
    //
    // <DragOverlay /> uses this state
    // to render the floating preview image
    // that follows the cursor while dragging.
  };

  // THIS is the key — update state DURING drag for live preview
  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    //If same container → do nothing here
    if (!over) return;
    // Only handle cross-container moves

    const activeId = active.id as string; //active — the item being dragged
    const overId = over.id as string; // over — the item you're hovering over

    const activeContainer = findContainer(activeId); // 👉 The container where the dragged item originally comes from (source)-> it is only the key eg. zone1
    const overContainer = findContainer(overId); // The container of whatever you're currently hovering over , //* If you're hovering an image → it's that image’s container & If you're hovering a zone itself (empty area) → it's that zone

    if (!activeContainer || !overContainer) return;
    if (activeContainer === overContainer) return; // this is fine — keep it

    setContainers((prev) => {
      //   const prev = {
      //   zone1: [
      //     { id: "a1", imageUrl: "/img1.jpg", order: 1 },
      //     { id: "a2", imageUrl: "/img2.jpg", order: 2 },
      //   ],
      //   zone2: [
      //     { id: "b1", imageUrl: "/img3.jpg", order: 3 },
      //   ],
      //   zone3: [],
      // };
      const activeItems = [...prev[activeContainer]]; // copy of items that was inside dragged item originally comes from
      // prev = {z1: ["b-1", "b-2"], z2: ["b-3", "b-4"]} //  prev[z2] = ["b-3", "b-4"] -> ...prev[z2] = "b-3", "b-4" -> [...prev] = ["b-3", "b-4"]
      // prev[activeContainer]    // → ["box-1", "box-2"]  (original)
      // ...prev[activeContainer] // → "box-1", "box-2"    (unpacked)
      // clone array to avoid mutating state
      const overItems = [...prev[overContainer]]; // copy of the the container's items currently hovering over
      const activeIndex = activeItems.findIndex((i) => i.id === activeId);
      // if we are dragging the b-4 (id) then -> we find the index of that image in the activeItem
      // activeId = "b-4"  ← the item you're dragging

      // 1st loop → "b-3" === "b-4" → false, keep going
      // 2nd loop → "b-4" === "b-4" → ✅ true, stop here!
      // 3rd loop → never reached
      // so findIndex return use the index
      // active index = 1
      //Returns -1 if nothing matches, means not found
      const item = activeItems[activeIndex]; // that item is in the container b-4, the imageG object

      if (!item) return prev; // guard against double-firing

      // Already moved? prevent duplicate
      const alreadyInOver = overItems.some((i) => i.id === activeId); // checking if the item already exists in the destination
      // overItem = [{id: "b-3"}, {id: "b-4"}]
      // activeId = "b-4"
      // loop: i = {id: "b-3"} -> "b-3" === "b-4" -> false
      // i = {id: "b-4"} -> "b-4" === "b-4" -> true
      // alreadyInOver = true  ← box-2 is already there!
      if (alreadyInOver) return prev;

      const isOverAContainer = overId in prev;
      // prev is your state object — its keys are container ids
      // in checks if overId is a key in prev
      // overId (thing im hovering over) -> overId = "zone2" (if it's a ) -> overId in prev -> will be true
      // overId -> overId = "b1" (it id of GalleryImage, if we are hovering over a image) -> it will be false because it is not the key of prev
      const overIndex = isOverAContainer
        ? overItems.length
        : overItems.findIndex((i) => i.id === overId); // so the overIndex is the the container / zone object index where we want our new activeImage to be
      // if isOverAContainer then its a empty space and we want the image to be add to the last index. so we need total length of the overItems, (over item is the container in this case, we know it from isOverAContainer and the overItem is alloys the the thing we are currently hovering over ) -> we want the index of the image so we can replace with new image (activeImage)

      const insertAt = overIndex >= 0 ? overIndex : overItems.length;
      // Case A: valid index (overIndex >= 0)
      // Example: overIndex = 1 → insertAt = 1
      // 👉 insert the dragged image at that exact position

      // Case B: not found (overIndex = -1)
      // 👉 fallback → insert at end of the array

      // overItems.length means:
      // - 0 → if the target zone is empty → insert at index 0
      // - last index → if zone has items → insert at the end
      const newOverItems = [...overItems];
      // Create a shallow copy of the array so we can modify it safely
      // (React state must not be mutated directly)
      //
      // Note: This only copies the array structure, NOT the objects inside it.
      // Each GalleryImage object still points to the same reference.
      //
      // Example:
      // newOverItems[0] === overItems[0] → true
      //
      // So:
      // - Reordering the array is safe ✅
      // - But mutating an object inside (e.g. item.order = 5) would still affect the original ❌
      newOverItems.splice(insertAt, 0, item);
      // splice(startIndex, deleteCount, ...itemsToInsert)
      //
      // Start at index `insertAt`
      // delete 0 items (so nothing is removed)
      // insert `item` (a GalleryImage) at that position
      //
      // `item` = the dragged image (same object reference from the source zone)
      //
      // Result:
      // - existing items at and after `insertAt` shift to the right
      // - array length increases by 1

      return {
        ...prev,
        [activeContainer]: activeItems.filter((i) => i.id !== activeId),
        [overContainer]: newOverItems,
      };
      // Spread previous state so all zones stay unchanged by default
      // Then we override ONLY the two zones involved in the drag

      //* Step 1: Update source zone (REMOVE the dragged item)
      // activeContainer = the zone where the dragged image came from (e.g. "zone1")
      // activeItems = images currently in that zone
      //
      // filter(): removes the dragged image by id
      //
      // Example:
      // before: zone1 = [a1, a2]
      // dragging: a2
      // after:  zone1 = [a1]

      //* Step 2: Update target zone (INSERT the dragged item)
      // overContainer = the zone we are dragging into (e.g. "zone2")
      // newOverItems = already updated array where we inserted the item using splice()
      //
      // Example:
      // before: zone2 = [b1, b2]
      // after:  zone2 = [b1, a2, b2]
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // Remove the floating preview image from <DragOverlay />
    // because dragging has finished
    setActiveImage(null);
    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;
    // activeId  = id of the dragged image
    // overId = id of item/zone currently being dropped on // this is key eg. "zone1"
    const activeContainer = findContainer(activeId); // key name
    const overContainer = findContainer(overId); // key name
    // Find:
    // - source zone of dragged image
    // - target zone being dropped into

    if (!activeContainer || !overContainer) return;
    if (activeContainer !== overContainer) return;
    // Cross-container movement is already handled live.
    // inside handleDragOver().
    //
    // So if the image moved between zones,
    // we do nothing here in draggedEnd

    // Cross-container already handled in onDragOver



    // If we reach here:
    // The drag started and ended inside the SAME zone.
    //
    // So now we only need to reorder and handle items
    // within that single container.

    // Same container → reorder
    setContainers((prev) => {
      // current GImage with content `ref`
      const items = prev[activeContainer];

      // find current position of the dragged  Index
      const oldIndex = items.findIndex((i) => i.id === activeId);
      // find target position of the dragged image Index
      const newIndex = items.findIndex((i) => i.id === overId); 
      //  remember  we are doing same container rendering 

      if (oldIndex === newIndex) return prev; // no change

      return {
  ...prev,

  // Reorder items inside the same container.
  //
  // arrayMove():
  // - creates a NEW reordered array
  // - does NOT mutate the original `items` array
  // - moves the item from oldIndex → newIndex
  //
  // The new array replaces the current container's array
  // in React state, triggering a re-render.
  // why not original "items" array : https://chatgpt.com/s/t_69fc1a8e1f7c8191b4134afc3be8481f

  [activeContainer]: arrayMove(items, oldIndex, newIndex),
};
    });
  };

  async function handleDelete(id: string) {
    await deleteImage(id);
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6 w-100 ">
      <h2 className="text-lg font-bold mb-4">Drag to Reorder</h2>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners} // closestCorners works better for zones
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}>
        <div className="flex flex-col gap-4">
          {Object.entries(containers).map(([zoneId, items]) => (
            <DroppableZone key={zoneId} id={zoneId}>
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
        {/* DragOverlay renders a floating preview while dragging */}

        <DragOverlay>
          {/*
    DragOverlay does NOT move or insert the image into a zone.

    It only renders a visual preview that follows the cursor
    during dragging.

    The preview image comes from `activeImage` state,
    which is set inside `handleDragStart`.

    The actual image movement between zones happens inside:
    - handleDragOver()
    - setContainers()

    So:
    - DragOverlay = visual feedback only
    - containers state = real layout/data
  */}

          {activeImage ? (
            <img
              src={activeImage.imageUrl}
              alt=""
              className="w-full h-full object-cover rounded shadow-xl opacity-90 cursor-grabbing"
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

// we are not using arrayMove in handleDragOver  because arrayMove() is designed for reordering inside same  array , recorder position
// but handleDragOver is mainly handles: moving items BETWEEN DIFFERENT CONTAINERS : zone1 → zone2

//* We want to know which container owns whatever we’re hovering over (item OR zone)
// We want to know which zone the image is hovering over

{
  /* 
  //* const findContainer = (id: string) => {
  //*   if (id in containers) return id;

  //*   return Object.keys(containers).find((key) =>
  //*     containers[key].some((item) => item.id === id),
  //*   );

    
    .find((key) => ...) -> Loop through each container -> Find the FIRST container that matches
    Check inside each container -> containers[key].some((item) => item.id === id) ->  Does ANY item match this condition? : b.some(item => item === "box-2")

    
  };*/
}

// so when we do findContainer(overId)
// findContainer(zone2) -> if the overId = zone2 then -> if (zone2 in // in checks for key not values, ) return zone2; -> return zone1 //* it most likely happens if the zone is empty
// And if the image we are hovering over a img5 that is in zone3
// then
// we first Object.keys(containers) -> ["zone1", "zone2", "zone3"]
// ["zone1", "zone2", "zone3"].find((key) => ) -> key is the each item like "zone1" -> Loop through each container -> Find the FIRST container that matches
// Check inside each container -> containers[key].some((item) => item.id === id) ->  Does ANY item match this condition? : b.some(item => item === "box-2") -> if true for any container then return that zone
