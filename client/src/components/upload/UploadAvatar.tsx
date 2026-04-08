"use client";

import { useState } from "react";

interface UploadAvatarProps {
  currentAvatar: string | null;
  onAvatarUpdate: (newUrl: string) => void;
}

export default function UploadAvatar({
  currentAvatar,
  onAvatarUpdate,
}: UploadAvatarProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(currentAvatar);
  const [loading, setLoading] = useState(false);

  // handle file section
  //* (hwo does a react function being called) https://chatgpt.com/s/t_69a7afd907d081918c904acf5494b90d

  // (React.ChangeEvent<HTMLInputElement>) https://chatgpt.com/s/t_69a7b04db4c88191bafb2831a2339595
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;
    setSelectedFile(file);

    console.log(file.name); // myphoto.png
    console.log(file.type); // image/png
    console.log(file.size); // 245678 bytes
    // create instant preview, Creates a temporary internal URL that points to the file in memory, not on disk. blob:http://localhost:3000/8f3c9a2b.....
    // https://chatgpt.com/s/t_69a7b50afe74819190e82b17ba337614
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);

    console.log(previewUrl)

    
  };

  // Upload to backend
  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/upload/uploadCloudinaryController`,
        {
          method: "POST",
          body: formData,
          credentials: "include", // important if using cookies
        },
      );
      if (!res.ok) throw new Error("upload failed");
      const data = await res.json();

      // Update present state with new avatar Url from cloud (which is suppose to be the same img as the preview image)
      onAvatarUpdate(data.cloudUrl);

      // clean memory
      URL.revokeObjectURL(preview!);
      setSelectedFile(null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Avatar preview */}
      <div>
        <img
          src={
            preview ||
            "https://static.vecteezy.com/system/resources/previews/029/825/357/non_2x/default-avatar-profile-icon-isolated-on-white-background-social-media-user-sign-symbol-vector.jpg"
          }
          alt="Avatar"
          className="w-32 h-32 rounded-full object-cover border"
        />
      </div>

      {/* File input */}
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={!selectedFile || loading}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload Avatar"}
      </button>
    </div>
  );
}
