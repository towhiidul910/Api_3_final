"use client"

import { useUploadGalleryImagesMutation } from "@/REDUX&AXIOS/api/apiSlice";
import { useState } from "react"



export default function GalleryUploader () {
    
    const [uploadGalleryImages,  { isLoading }] = useUploadGalleryImagesMutation();

    const [files, setFiles] = useState<File[]>([])
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
        setFiles((prev) => prev.filter((_, i) => i !== index)); // prev is the current stored array of file objects

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



// import stuff
// import mutation and const it , import right one because baseQuery matter in redux and for auth
// setFiles : it stores the the actual image files selected by the user.
// setPreview : it store the link of the image after the image in memory url


//* handle file:
// why: it takes the file form html input type="file" element and store in to setFiles. and turn the file into mamore url because so the imc can show it becasue image element cant show the image directly it needs url. and set the urls in the setPReviews


//* removeImage : 
// why: the remove image is insert in the image div that contain the image and also have the access ot the index of the image previews (URL), 
// so the removeImage takes the index as parameter , 
// insetFiles 


//* setFiles((prev) => prev.filter((_, i) => i !== index)); : explained here: notes\filter&inside.function.note.js

//* handleUpload :
// if length is false then return
// formData : notes\form&file.txt
// then for each file because the input type = "file" let the user choose more then one image
// then well append every file in the formData
// well append other thing if needed

// then well try to upload with the formdata and take response (do ever we wanna do with res)
// then after uploading well setJFiles and previews empty

//* then the html
