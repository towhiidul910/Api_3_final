// client\src\components\upload\UploadAdvance\util\cropImage.ts
export default async function getCroppedImg(
  imageSrc: string,
  pixelCrop: { x: number; y: number; width: number; height: number },
  rotation = 0,
) {
  const image = new Image();
  image.src = imageSrc;

  // wait for the image to load
  await new Promise((resolve) => (image.onload = resolve));

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    // Handle the case where ctx is null
    console.error("Failed to get 2D rendering context for the canvas");
    return;
  }

  const radians = (rotation * Math.PI) / 180;

  // calculate bounding box after rotation
  const sin = Math.abs(Math.sin(radians));
  const cos = Math.abs(Math.cos(radians));
  const newWidth = image.width * cos + image.height * sin;
  const newHeight = image.width * sin + image.height * cos;

  canvas.width = newWidth;
  canvas.height = newHeight;

  // rotate around center
  ctx.translate(newWidth / 2, newHeight / 2);
  ctx.rotate(radians);
  ctx.drawImage(image, -image.width / 2, -image.height / 2);
  ctx.rotate(-radians);
  ctx.translate(-newWidth / 2, -newHeight / 2);

  // crop the selected ara
  const data = ctx.getImageData(
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
  );

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  ctx.putImageData(data, 0, 0);

  return new Promise<Blob>((resolve) => {
    canvas.toBlob((blob) => resolve(blob!), "image/jpeg", 0.9);
  });
}

//* explain return : canvas.toBlob(callback, type, quality);

// canvas.toBlob((blob) => resolve(blob!), type, quality);
// now the getCroppedImg will return the Blob value ,, blob === the JPEG image file


// flow of the return :
// Canvas drawing
//      │
//      ▼
// canvas.toBlob(...)
//      │
//      │ browser converts canvas → JPEG
//      ▼
// callback runs with Blob
//      │
//      ▼
// resolve(blob!)
//      │
//      ▼
// Promise finished
//      │
//      ▼
// await gets Blob

// simple version:
// canvas → convert → image file
// canvas → convert → callback → resolve promise → await continues