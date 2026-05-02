import { useSortable } from "@dnd-kit/sortable";
import { GalleryImage } from "../dnd8.gallery";
import { CSS } from "@dnd-kit/utilities";



export function SortableImage({
    image, onDelete
}: {image: GalleryImage; onDelete: (id: string) => void}) {
    const {attributes, listeners, setNodeRef, transform, transition, isDragging} = useSortable({id: image.id})

    const style: React.CSSProperties = {
        transform: CSS.Transform.toString(transform),
    transition,
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "grab",
    opacity: isDragging ? 0.5 : 1,
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {/* images */}
            <img src={image.imageUrl}  alt="" className="w-full h-32 object-cover rounded" />

            {/* Delete button */}
            <button onClick={() => onDelete(image.id)} className="`absolute top-1.5 right-1.5 bg-red-500 text-white border-0 p-1 px-2 cursor-pointer`">x</button>
        </div>
    )
}
