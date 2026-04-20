"use client"

import { useSortable } from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities"

type Props = {
    img: {
        id: string;
        imageUrl: string
    }
}

export default function SortableImage({img}: Props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({id: img.id})

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing">
            <img src={img.imageUrl} className="w-full h-32 object-cover rounded" />
        </div>
    )
}