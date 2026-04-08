import { useDropzone } from "react-dropzone";

export default function AvatarDrop() {

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": []
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      console.log(file);
    }
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed p-10 text-center"
    >
      <input {...getInputProps()} />

      {isDragActive ? (
        <p>Drop the image here...</p>
      ) : (
        <p>Drag & drop avatar here or click to select</p>
      )}
    </div>
  );
}