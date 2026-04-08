"use client";
import { useUploadAvatarMutation } from "@/REDUX/features/api/apiSlice";
import React, { useState } from "react";

interface UploadAvatarProps {
  currentAvatar: string | null;
  onAvatarUpdate: (newUrl: string) => void; // because it will be useState
}

const UploadAvatarR = ({
  currentAvatar,
  onAvatarUpdate,
}: UploadAvatarProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(currentAvatar);
  const [loading, setLoading] = useState(false);

  const [UploadAvatarR, { isLoading }] = useUploadAvatarMutation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const result = await UploadAvatarR(formData).unwrap();

      onAvatarUpdate(result.cloudUrl);

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
        {isLoading ? "Uploading 🫨 ..." : "Upload Avatar"}
      </button>
    </div>
  );
};

export default UploadAvatarR;
