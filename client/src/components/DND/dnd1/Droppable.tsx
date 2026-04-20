"use client"

import {useState, useEffect} from "react"
import {DndContext, closestCenter, DragEndEvent} from "@dnd-kit/core"

import {
    SortableContext, arrayMove, rectSortingStrategy
} from "@dnd-kit/sortable"

import { useGetGalleryImagesQuery } from "@/REDUX&AXIOS/api/apiSlice"
import SortableImage from "../../upload/UploadG/util/SortableImage"
// import SortableImage  from "./util/SortableImage"

type GalleryImage = {
    id: string;
    imageUrl: string;
    order: number
}



export default function DroppableComponent() {
    const {data, isLoading} = useGetGalleryImagesQuery();

    const imgs = data?.images 

    const [images, setImages] = useState<GalleryImage[]>
([])

// sync server -> local state
useEffect(() => {
    if (imgs) {setImages(imgs as GalleryImage[])}
}, [data])

const handleDragEnd = (event: DragEndEvent) => {
    const {active, over} = event;

    if (!over || active.id === over.id) return

    const oldIndex  = images.findIndex((img) => img.id === active.id);
    const newIndex = images.findIndex((img) => img.id === over.id)

    const newOlder = arrayMove(images, oldIndex, newIndex);

    setImages(newOlder)
    
}

if (isLoading) return <p>Loading...</p>

return (
    <div className="p-6">
        <h2 className="text-lg font-bold mb-4">Drag to Recorder</h2>

        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={images.map((img) => img.id)} strategy={rectSortingStrategy}>
                <div className="grid grid-cols-3 gap-4 border border-amber-300">
                    {images.map((img) => (
                        <SortableImage key={img.id} img={img}/>
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    </div>
)

}