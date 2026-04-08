"use client";

import { useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";

export default function AvatarTest() {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  return (
    <div className="relative w-full h-[300px]">
      <Cropper
        image="https://picsum.photos/800"
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={(location: Point) => setCrop(location)}
        onZoomChange={(zoom: number) => setZoom(zoom)}
        onCropComplete={(croppedArea: Area, croppedAreaPixels: Area) => {
          console.log(croppedAreaPixels);
        }}
      />
    </div>
  );
}


//* Explain about Cropper 
// 

//* now hoe cropper works
//

{
  /* <Cropper
  image={imageSrc}          // the image to crop
  crop={crop}               // {x, y} position of the crop
  zoom={zoom}               // zoom level
  aspect={1}                // ratio of width:height (1 = square)
  onCropChange={setCrop}    // called every time user moves the crop box
  onZoomChange={setZoom}    // called every time zoom slider changes
  onCropComplete={onCropComplete} // called when user stops moving the crop
/> */
}

// The <Cropper> component is a controlled React component. That means you control its state, and it tells you when things change.

// when the imageSrc got the memories url then the Cropper div and Cropper component visible with img








//* image={imageSrc}
// this tells teh cropper which image to display to crop
// const [imageSrc, setImageSrc] = useState<string | null>(null);

//* we going to set the values by set the values by
// onCropChange={setCrop}
// onZoomChange={setZoom}
// onCropComplete={onCropComplete}

//* Explain
// These three props are basically event callbacks from the react-easy-crop component.
// They tell your React state what the user is doing inside the cropper UI
//? why are we dong setZoom twice in cropper component and also in the zoom input section onchange ?

//* onCropChange={setCrop}
// A callback that fires every time the user drag the image
//? what it gives you :
// The new crop position {x: number, y: number}
//? {x: 20, y: -15} meaning :
// the image moved 20px right and 15px up inside the corp frame

// pipeline :
// You passed React's state setter directly: const [crop, setCrop] = useState({ x: 0, y: 0 });
//         ↓
// So when Cropper calls: onCropChange({x: 50, y: 10})
//         ↓
// React runs: setCrop({x:50, y:10}) //* Which updates your state
//? then what happens ?

//* onZoomChange={setZoom}
// this zoom setZoom and input Element zoom are not one thing , the input is for slider effect and this one is native and it use for on image mouse wheel or pinch gesture , and the value of the zoom set by setZoom and the value of the zoom wer pass to the input value={zoom} so both stays sink , and //? also the zoom value pass to this Cropper component zoom={zoom} for visual representation ?
//? what it is :
// A callback fired whe4n the zoom level changes
//? Usually triggered bky :
// range slider , mouse wheel , pinch gesture (mobile)
//? Pipeline : 
// it sends number : 1 = normal, 2 = 2x zoom, 3 = 3x zoom 
// User moves zoom slider
//        ↓
// Cropper detects new zoom
//        ↓
// onZoomChange(newZoom)
//        ↓
// setZoom(newZoom)
//        ↓
// React re-render
//        ↓
// Cropper zoom updates


//**  onCropComplete={onCropComplete}
//? what is does: 
// it fires after the user stop moving the cop area 
// Meaning: drag finished, zoom finished, crop stabilized
// then Cropper calculate the actual pixels to crop

//? what it gives you :
// two object :
// croppedArea, croppedAreaPixels
// croppedAreaPixels = {
//   width: 500,
//   height: 500,
//   x: 200,
//   y: 120
// }
//? meaning: crop 500x500 area , starting at pixel 200,120
// This is exactly what you later use for canvas cropping
//? flow :
// User drags crop
//         ↓
// User releases mouse
//         ↓
// Cropper calculates crop rectangle
//         ↓
// onCropComplete()
//         ↓
// setCroppedAreaPixels(...)
//         ↓
// Later used in canvas cropping

//* onCropComplete = useCallback( (_croppedArea, croppedAreaPixels) => 
//? useCallback :
// we use ti so we get only the memoised version of the onCropComplete function. This prevents React from recreating the function every render, which avoids unnecessary re-renders of the cropper
//         ↓
// we ignore the _croppedArea and keep only pixel version (croppedAreaPixels)
//         ↓
// and set the setCroppedAreaPixels(croppedAreaPixels); which takes Area type  useState<Area | null>(null);





//* the cropper a controlled component.
// image={imageSrc}
// crop={crop}
// zoom={zoom}
// aspect={1}
//? what are they: 
// These three props are what make the cropper a controlled component.
// the callbacks (onCropChange, onZoomChange, onCropComplete). Those send data out of the cropper
//* Now these ones send data into the cropper
// React state → Cropper UI
// Cropper UI → callbacks → React state
// Two-way communication
//? flow :
// User selects file
//       ↓
// createObjectURL(file)
//       ↓
// imageSrc = blob URL
//       ↓
// image={imageSrc}
//       ↓
// Cropper displays image

//* crop={crop}
//? what it is :
// this tells cropper the current position of the image inside the corp area
//? how it warks : 
// your sate: const [crop, setCrop] = useState({ x: 0, y: 0 });
// example values: {x: 0, y: 0}, {x: 40, y: -20}, {x: -10, y: 15}
// this represent how image shifted inside th crop box

//? Example values
// image : {x: 0, y: 0} {x: 40, y: -20} {x: -10, y: 15}
// these represent how the image shifted inside the crop box

//? example
//*Imagine the crop box stays fixed but the image moves
// Crop frame
// +--------+
// |        |
// |  IMG   |
// |        |
// +--------+

//* if you drag the image: 
// Crop frame
// +--------+
// | IMG    |
// |        |
// |        |
// +--------+
// The cropper updates : {x: 40, y: -20}
// Then React stores it with setCrop

// zoom={zoom}
//? What it is :
// the controls how zoomed the image is
// Your state: const [zoom, setZoom] = useState(1);
// Typical Values:  1 → normal size , 1.5 → 150% , 2 → 200% , 3 → 300%

//* we can zoom with scroll wheel & also We connected it to the slider 
//* <input
//   type="range"
//   min={1}
//   max={3}
//   step={0.1}
//   value={zoom}
//   onChange={(e) => setZoom(Number(e.target.value))}
// />

//* when user moves th slider: 
// zoom = 1 -> 2 // sort it in setZoom 
// the pass Cropper zoom={zoom} & value={zoom}
// So the cropper updates the image scale.

//? flow :
// React state
//    │
//    │ imageSrc
//    │ crop
//    │ zoom
//    ▼
// Cropper UI
//    │
//    │ user drags / zooms
//    ▼
// Callbacks
//    │
//    │ onCropChange
//    │ onZoomChange
//    │ onCropComplete
//    ▼
// React state updates

