"use client";

import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";

import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import { useEffect, useState } from "react";

// rtk query hook

import { useGetGalleryImagesQuery, useDeleteGalleryImageMutation } from "@/REDUX&AXIOS/api/apiSlice";
import { SortableImage } from "./utils/sortable.image";

// type
export type GalleryImage = {
    id: string;
    imageUrl: string;
    order: number
}



// sortable image component


export default function Gallery() {
    const {data, isLoading} = useGetGalleryImagesQuery() 
    const [deleteImage] = useDeleteGalleryImageMutation()
    // local state for ordering

    const imgs = data?.images

    const [images, setImages] = useState<GalleryImage[]>([])


    // sync api -> local state
    useEffect(() => {
        if (imgs) {
            setImages(imgs as GalleryImage[])
        }
    }, [data])

    const handleDragEnd = (event: DragEndEvent) => {
        const {active, over} = event 
        if (!over || active.id === over.id) return
        
        const oldIndex = images.findIndex((img) => img.id === active.id)
        //  "img-1" === "img-2"  → false, keep looking
        //  "img-2" === "img-2"  → true ✅ return index 1
        const newIndex = images.findIndex((img) => img.id === over.id)

        const newOrder = arrayMove(images, oldIndex, newIndex)

        setImages(newOrder)
    }

    // delete handler
    async function handleDelete(id: string) {
        await deleteImage(id)
    }

    if (isLoading) return <p>Loading...</p>

    return (
        <div className="p-6">
            <h2 className="text-lg font-bold mb-4">Drag to Recorder</h2>

            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={images.map((img) => img.id)} strategy={rectSortingStrategy}>
                    <div className="grid grid-cols-3 gap-4 border border-amber-300">
                        {images.map((img) => (
                            <div key={img.id} className="aspect-auto">
                                <SortableImage image={img} onDelete={handleDelete}/>
                            </div>
                        ))}
                    </div>

                </SortableContext>
            </DndContext>
        </div>
    )
}