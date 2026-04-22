"use client";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { DropZone, Location5 } from "./util/dropZone";

const dzs: Location5[] = ["dz-1", "dz-2", "dz-3", "dz-4", "dz-5"];
export type boxType = "box-1" | "box-2"

const Dnd5 = () => {
  const [itemLocations, setItemLocations] = useState<Record<boxType, Location5>>({
    "box-1": "dz-1",
    "box-2": "dz-2"
  });

// Record<K, V>
// “An object where keys are type K and values are type V”

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over  || !dzs.includes(over.id as Location5)) return;

    


    // if (dzs.includes(over.id as Location5)) {
    //   setItemLocations(over.id as Location5);
    // }

    setItemLocations((prev) => ({
      ...prev, [active.id as boxType]: over.id as Location5 // In objects: same key = overwrite, not add // we dont do [over.id as Location5] because it is not object and also we dont do // active.id as boxType: this because the key has to be literal "box-1"
     }))
  };

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
        <h1>Droppable Zone</h1>


        {dzs.map((dz) => (
          <DropZone id={dz} key={dz} itemLocations={itemLocations} />
        ))}
      </DndContext>
    </div>
  );
};

export default Dnd5;
