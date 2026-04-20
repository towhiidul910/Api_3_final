"use client";

// import { DropZone } from '@/components/DND/dnd3/util/dropZone'
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { DropZone, Location4 } from "./util/dropZone";

const dzs: Location4[] = ["dz-1", "dz-2", "dz-3", "dz-4", "dz-5"];

const Dnd4 = () => {
  const [location, setLocation] = useState<Location4>("dz-1");

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;

    if (!over) return;

    // 👇 this is the real "drop result"
    //     if (over.id === "right") {
    //         setLocation("right")
    //         console.log("Dropped on:", over.id)
    //     }

    //     if (over.id === "left") {
    //         setLocation("left")
    //     }

    if (dzs.includes(over.id as Location4)) {
      setLocation(over.id as Location4);
    }
  };

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
        <h1>Droppable Zone</h1>

        {/* <LeftZone location={location} />
            <RightZone location={location}/> */}
        {dzs.map((dz) => (
          <DropZone id={dz} key={dz} activeLocation={location} />
        ))}
      </DndContext>
    </div>
  );
};

export default Dnd4;
