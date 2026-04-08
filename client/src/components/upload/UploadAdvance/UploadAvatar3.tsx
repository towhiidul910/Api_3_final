import { useState, useCallback } from "react";
import Cropper, { Area } from "react-easy-crop";
import { useUploadAvatarProgressMutation } from "@/REDUX/features/api/apiSlice";
import getCroppedImg from "./util/cropImage";

export default function AvatarPageA3() {
  const [uploadAvatar] = useUploadAvatarProgressMutation();

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [progress, setProgress] = useState(0);

  const handleFile = (file: File) => {
    const url = URL.createObjectURL(file);
    setImageSrc(url);
    setPreview(url);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    handleFile(e.target.files[0]); //* handle file will store the image in the setImageSrc() and setPreview()
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (!e.dataTransfer.files.length) return;
    handleFile(e.dataTransfer.files[0]);
  };

  const onCropComplete = useCallback(
    (_croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    [],
  );

  const uploadImage = async () => {
    if (!croppedAreaPixels || !imageSrc) return;
    setProgress(0);

    const blob = await getCroppedImg(imageSrc, croppedAreaPixels, rotation);
    if (!blob) return;
    const formData = new FormData();
    formData.append("image", blob);
    formData.append("email", "towhiidul910@gmail.com");

    const result = await uploadAvatar({
      formData,
      onProgress: (percent) => setProgress(percent),
    });

    setPreview(result.data?.cloudUrl as string);

    // free memory
    URL.revokeObjectURL(imageSrc);
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-xl font-bold">Upload Avatar</h1>

      {preview && (
        <img
          src={preview}
          alt="avatar"
          className="w-32 h-32 rounded-full object-cover"
        />
      )}

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className="border-2 p-10 text-center"
      >
        Drag & Drop Image
      </div>

      <input type="file" accept="image/*" onChange={onFileChange} />

      {imageSrc && (
        <>
          <div className="relative w-full h-[300px]">
            <Cropper
              image={imageSrc}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>

          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
          />

          <input
            type="range"
            min={0}
            max={360}
            value={rotation}
            onChange={(e) => setRotation(Number(e.target.value))}
          />

          <button
            disabled={progress > 0 && progress < 100}
            onClick={uploadImage}
            className="btn bg-blue-500 hover:bg-sky-700 text-white px-2 rounded"
          >
            Upload Avatar
          </button>
        </>
      )}

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
