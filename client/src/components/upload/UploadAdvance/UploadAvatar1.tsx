"use client";
//* with rotation

import { useState, useCallback } from "react";

import Cropper, { Area } from "react-easy-crop";
import { useUploadAvatarProgressMutation } from "@/REDUX/features/api/apiSlice";

export default function AvatarPage() {
  const [uploadAvatar] = useUploadAvatarProgressMutation();

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0); // i added this but still
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [progress, setProgress] = useState(0);

  // handle file select // cropper needs url not a file
  const handleFile = (file: File) => {
    const url = URL.createObjectURL(file);
    setImageSrc(url);
    setPreview(url);
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
      console.log(croppedAreaPixels);
    },
    [],
  );

  // crop image with canvas //* Image Cropping (Canvas Magic)
  const createCroppedImage = async () => {
    const img = new Image();
    img.src = imageSrc!;

    await new Promise((resolve) => (img.onload = resolve)); //?

    if (!croppedAreaPixels) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!; //?

    const radians = (rotation * Math.PI) / 180;

    // calculate bounding box of rotated image
    const sin = Math.abs(Math.sin(radians));
    const cos = Math.abs(Math.cos(radians));

    const newWidth = img.width * cos + img.height * sin;
    const newHeight = img.width * sin + img.height * cos;

  
    canvas.width = newWidth;
    canvas.height = newHeight;

    // move origin of center
    ctx.translate(newWidth / 2, newHeight / 2);
    ctx.rotate(radians);

    // draw image created
    ctx.drawImage(img, -img.width / 2, -img.height / 2);
    // crop from rotated image
    const data = ctx.getImageData(
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
    );

    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;

    ctx.putImageData(data, 0, 0);

    return new Promise<Blob>((resolve) => {
      canvas.toBlob((blob) => resolve(blob!), "image/jpeg", 0.9);
    });
  };

  const uploadImage = async () => {
    setProgress(0);
    const blob = await createCroppedImage();
    if (!blob) return;
    const formData = new FormData();
    formData.append("image", blob);
    formData.append("email", "towhiidul910@gmail.com");
    const result = await uploadAvatar({
      formData,
      onProgress: (percent) => setProgress(percent),
    });

    setPreview(result.data?.cloudUrl as string);
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
      {/* drag drop 🫳🏻 */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className="border-2 p-10 text-center"
      >
        Drag & Drop Image
      </div>

      {/* file input ✅ */}
      <input type="file" accept="image/*" onChange={onFileChange} />

      {/* cropper */}
      {imageSrc && (
        <div className="relative w-full h-[300px]">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
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
      {imageSrc && (
        <input
          type="range"
          min={0}
          max={360}
          value={rotation}
          onChange={(e) => setRotation(Number(e.target.value))}
        />
      )}
      {/* upload */}
      {imageSrc && (
        <button
          disabled={progress > 0 && progress < 100}
          onClick={uploadImage}
          className="btn bg-blue-500 hover:bg-sky-700 text-white px-4 py-2 rounded "
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
          <p className="text-sm mt-1">{progress}% Complete</p>
        </div>
      )}
    </div>
  );
}
