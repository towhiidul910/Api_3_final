"use client";

import { useUploadAvatarProgressMutation } from "@/REDUX/features/api/apiSlice";
import { useState, useCallback } from "react";

import Cropper, { Area } from "react-easy-crop";
// import { useUploadAvatarProgressMutation } from 

export default function AvatarPage() {
  const [uploadAvatar] = useUploadAvatarProgressMutation();

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [progress, setProgress] = useState(0);

  // handle file select // cropper needs url not a file
  const handleFile = (file: File) => {
    const url = URL.createObjectURL(file);
    setImageSrc(url);
  };
  // file input change
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    handleFile(e.target.files[0]);
  };

  // drag & drop , we need both input and drag & drop both option for user  
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (!e.dataTransfer.files.length) return;
    handleFile(e.dataTransfer.files[0]);
  };


  //* Cropper Callback (IMPORTANT) ?
  const onCropComplete = useCallback(
    (_croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
      console.log(croppedAreaPixels)
    },
    [],
  );

  // crop image with canvas //* Image Cropping (Canvas Magic)
  const createCroppedImage = async () => {
    const img = new Image();
    img.src = imageSrc!;

    await new Promise((resolve) => (img.onload = resolve)); //?

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!; //? 

    if (!croppedAreaPixels) return;


    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;

    ctx.drawImage( //! what are all these garish
      img,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
    );
    return new Promise<Blob>((resolve) => {
      canvas.toBlob((blob) => resolve(blob!), "image/jpeg", 0.9);
    });
  };

  const uploadImageX = async () => {
    const blob = await createCroppedImage();

    if (!blob) return;
    const formData = new FormData();
    formData.append("image", blob);
    

    const xhr = new XMLHttpRequest();
  };

  const uploadImage = async () => {
    const blob = await createCroppedImage();
    if (!blob) return;
    const formData = new FormData();
    formData.append("image", blob);
    formData.append("email", "towhiidul910@gmail.com");
    const result = await uploadAvatar({
      formData,
      onProgress: (percent) => setProgress(percent),
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-bold">Upload Avatar</h1>
      {/* Current Avatar */}
      {preview && (
        <img
          src={preview}
          alt="avatar"
          className="w-32 h-32 rounded-full object-cover"
        />
      )}
      {/* drag drop */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className="border-2 p-10 text-center"
      >
        Drag & Drop Image
      </div>

      {/* file input */}
      <input type="file" accept="image/*" onChange={onFileChange} />

      {/* cropper */}
      {imageSrc && (
        <div className="relative w-full h-[300px]">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>
      )}
      {/* zoom */}
      {imageSrc && (
        <input
          type="range"
          min={1}
          max={3}
          step={0.1}
          value={zoom}
          onChange={(e) => setZoom(Number(e.target.value))}
        />
      )}

      {/* upload */}
      {imageSrc && (
        <button
          onClick={uploadImage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Upload Avatar
        </button>
      )}

      {/* progress bar */}
      {progress > 0 && (
        <div className="w-full bg-gray-200 h-2">
          <div
            className="bg-green-500 h-2"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}


// Your page does 6 main things:

// User selects or drags an image
// Image is loaded into a cropper
// User zooms + adjusts crop
// Cropper returns pixel coordinates
// You cut the image using canvas
// You upload the cropped image with progress

//* Think of it like this pipeline
// User selects image
//         ↓
// URL.createObjectURL()
//         ↓
// react-easy-crop UI
//         ↓
// Crop coordinates (pixels)
//         ↓
// Canvas crops image
//         ↓
// Blob (image file)
//         ↓
// FormData
//         ↓
// Upload to server
//         ↓
// Progress bar updates

//! question
// how useCallBack work and what is it doing here  and is it like the useEffect?
// i don't know anything about cropper 
// how does pixel coordinates works
// what is canvas
// and how does progress system working 



//* Ands 
//*  onCropComplete 
// this runs every time cropping changes the library gives two values: croppedArea & croppedAreaPixels , `` we keep only croppedAreaPixels because canvas needs pixel value
//? what is croppedArea and croppedAreaPixels 

//? does the alloys has on drag over or onDrag element ? 

//* hwo dra and drop works (remember user either drag and drop the file or select form there file)
//1. user take the img and drop in that div 
//2. and then in onDrop well check (!e.dataTransfer.files.length) or not,
// if file exist then well call and only one file to the handleFile function : handleFile(e.target.file[0])
// then in the handleFile: (remember in this moment the file is in the memory) so now well crate a (memory)url of that img because Cropper don't want the img it want the url of the img, : so new URL.crateObjectURL(file) and then well store it in the setImageSrc(url) 
//

//* now hoe cropper works 
// 

{/* <Cropper
  image={imageSrc}          // the image to crop
  crop={crop}               // {x, y} position of the crop
  zoom={zoom}               // zoom level
  aspect={1}                // ratio of width:height (1 = square)
  onCropChange={setCrop}    // called every time user moves the crop box
  onZoomChange={setZoom}    // called every time zoom slider changes
  onCropComplete={onCropComplete} // called when user stops moving the crop
/> */}

// The <Cropper> component is a controlled React component. That means you control its state, and it tells you when things change.