"use client"

import { useDeleteGalleryImageMutation, useGetGalleryImagesQuery } from "@/REDUX&AXIOS/api/apiSlice"


 const UserGalleryPage = () => {

    const {data: galleryImages, isLoading} = useGetGalleryImagesQuery()
    const [deleteImage] = useDeleteGalleryImageMutation()

    if (isLoading) {
      return <p className="mt-6">Loading images...</p>
    }

    if (!galleryImages?.images?.length) {
      return <p className="mt-6">No gallery images found.</p>
    }

    

    return (<div className="grid grid-cols-3 gap-4 w-4xl">
       {galleryImages.images.map((img) => (
        <div key={img.id} className="relative group">
          <img src={img.imageUrl} alt={`Gallery image ${img.order}`} className="w-full h-6xl object-contain" />
<button onClick={() => deleteImage(img.id)} className="absolute top-1 right-1 bg-red-500 text-white px-2 rounded opacity-0 group-hover:opacity-100 cursor-pointer">x</button>
        </div>
))}
    </div>)
}

export default UserGalleryPage
