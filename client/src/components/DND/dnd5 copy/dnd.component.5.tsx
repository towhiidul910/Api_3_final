"use client";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { DropZone, Location5 } from "./util/dropZone";

const dzs: Location5[] = ["dz-1", "dz-2", "dz-3", "dz-4", "dz-5"];
export type boxType = "box-1" | "box-2";

type ZonesState = Record<Location5, boxType[]>;

const  Dnd5Copy
 = () => {
  const [zones, setZones] = useState<ZonesState>({
    "dz-1": ["box-1"],
    "dz-2": ["box-2"],
    "dz-3": [],
    "dz-4": [],
    "dz-5": [],
  });

  // Record<K, V>
  // “An object where keys are type K and values are type V”

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || !dzs.includes(over.id as Location5)) return;

    const activeId = active.id as boxType;
    const newZone = over.id as Location5;

    // if (dzs.includes(over.id as Location5)) {
    //   setItemLocations(over.id as Location5);
    // }

    setZones((prev) => {
      // find which zone currently has this item
      let oldZone: Location5 | null = null;

      for (const zoneId of dzs) {
        if (prev[zoneId].includes(activeId)) {
          oldZone = zoneId;
          break;
        }
      }

      if (!oldZone) return prev;
      if (oldZone === newZone) return prev;

      return {
        ...prev,
        [oldZone]: prev[oldZone].filter((id) => id !== activeId),
        [newZone]: [...prev[newZone], activeId]
      }
    });
  };

   return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
        <h1>Droppable Zone</h1>

        {dzs.map((dz) => (
          <DropZone key={dz} id={dz} items={zones[dz]} />
        ))}
      </DndContext>
    </div>
  );
};


export default Dnd5Copy;