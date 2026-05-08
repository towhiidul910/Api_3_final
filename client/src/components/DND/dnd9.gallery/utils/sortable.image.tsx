import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";
import { GalleryImage } from "../../dnd8.gallery/dnd8.gallery";
// import { GalleryImage } from "../dnd8.gallery";
// import { GalleryImage } from "../dnd8.gallery.multiZone";

// export type GalleryImage = {
//     id: string;
//     imageUrl: string;
//     order: number
// }

export default function SortableImage({
  image,
  onDelete,
}: {
  image: GalleryImage;
  onDelete: (id: string) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: image.id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "grab",
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      className="aspect-square select-none"
      style={style}
      {...attributes}
      {...listeners}>
      {/* images */}

      <img
        src={image.imageUrl}
        alt=""
        className="w-full aspect-square object-cover rounded active:cursor-grabbing"
      />

      {/* Delete button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(image.id);
        }}
        onPointerDown={(e) => e.stopPropagation()}
        className="
    absolute top-1 right-1
    w-5 h-5
    flex items-center justify-center
    bg-black/60 hover:bg-red-500
    text-white text-sm font-bold
    rounded-full
    backdrop-blur
    transition-all duration-200
    cursor-pointer
  ">
        X
      </button>
    </div>
  );
}
