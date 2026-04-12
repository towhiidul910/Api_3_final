"use client"

import { useUploadGalleryImagesMutation } from "@/REDUX&AXIOS/api/apiSlice";
import { useState } from "react"



// export default function GalleryUploadPage () {
//     const [UploadGallery] = useUploadGalleryImagesMutation()
//     const [files, setFiles] = useState<File[]>([]);

//     // store preview URL's
//     const [previews, setPreview] = useState<string[]>([])

//     const [loading, setLoading] = useState(false);

//     // handle file input
//     const handleFiles = (fileList: FileList) => {
//         const newFiles = Array.from(fileList);

//         // limit to 10 (match backend)

//         if (files.length + newFiles.length > 0) {
//             alert("Max 10 image allowed");
//             return
//         }

//         // store files
//         setFiles((prev) => [...prev, ...newFiles]);

//         // create preview URLs
//         const newPreviews = newFiles.map((file) => URL.createObjectURL(file))

//         setPreview((prev) => [...prev, ...newPreviews]);
//     };

//     // remove image before upload
//     const removeImage = (index: number) => {
//         setFiles((prev) => prev.filter((_, i) => i !== index) )

//         setPreview((prev) => {
//             URL.revokeObjectURL(prev[index]);
//             return prev.filter((_, i) => i !== index)
//         });
//     }

//     const uploadImage = async () => {
//         if (files.length === 0) return alert("No image selected");

//         try {
//             setLoading(true);
//             const formData = new FormData();
            
//             // Important: must match backend key "image"
//         }
//     }
// }



export default function GalleryUploader () {
    //
    const [uploadGalleryImages,  { isLoading }] = useUploadGalleryImagesMutation();

    const [files, setFiles] = useState<File[]>([]);;
    const [previews, setPreviews] = useState<string[]>([])

    // Handle file section
    const handleFiles = (fileList: FileList) => {
        const newFiles = Array.from(fileList);

        // limit (optional safety)
        if (files.length + newFiles.length > 10) {
            alert("Max 10 images allowed")
            return
        }

        setFiles((prev) => [...prev, ...newFiles]);

        const newPreviews = newFiles.map((file) => URL.createObjectURL(file),)

        setPreviews((prev) => [...prev, ...newPreviews]);
    }

    // Remove single image before upload
    const removeImage = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));

        setPreviews((prev) => {
            URL.revokeObjectURL(prev[index]); 
            return prev.filter((_, i) => i !== index)
        })
    }

    // upload to backend bia rtk
    const handleUpload = async () => {
        if (!files.length) return 
        
        const formData = new FormData();

        files.forEach((file) => {
            formData.append("image", file);  // MUST match backend: upload.array("image")
        })

        formData.append("email", "towhiidul910@gmail.com")

        try {
            const res = await uploadGalleryImages(formData).unwrap();

            console.log("Upload success", res);

            // reset UI
            setFiles([])
            setPreviews([])
        } catch (err) {
            console.log("Upload failed", err)
        }
    };

    return (
        <div className="p-6 max-w-3xl mx-auto space-y-6">
            {/* Input */}
            <input type="file" multiple accept="image/" onChange={(e) => {
                if (e.target.files) handleFiles(e.target.files)
            }} />

            {/* preview grid */}
            <div className="grid grid-cols-3 gap-4 mt-4">
                {previews.map((src, index) => (
                    <div key={index} className="relative group">
                        <img src={src} className="w-full h-32 object-cover rounded" />

                        {/* Remove button */}
                        <button onClick={() => removeImage(index)} 
                            className="absolute top-1 right-1 bg-red-500 text-white px-2 rounded opacity-0 group-hover:opacity-10">
x
                        </button>
                    </div>
                ))}
            </div>

            {/* Upload Button */} 
            <button onClick={handleUpload} disabled={isLoading} className="bg-blue-500 text-white px-4 py-2 rounded">
                {isLoading ? "Uploading..." : "Upload Gallery"}
            </button>
        </div>
    )
}



// 