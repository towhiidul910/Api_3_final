"use client";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { DropZone, Location5 } from "./util/dropZone";

const dzs: Location5[] = ["dz-1", "dz-2", "dz-3", "dz-4", "dz-5"];
export type boxType = "box-1" | "box-2";

type ZonesState = Record<Location5, boxType[]>;
type ItemLocationMap = Record<boxType, Location5>;

const Dnd5Copy2 = () => {
  const createInitialZones = (): ZonesState => {
    const base = {} as ZonesState;

    dzs.forEach((dz) => {
      base[dz] = [];
    });

    // assign initial items
    base["dz-1"].push("box-1");
    base["dz-2"].push("box-2");
    return base;
  };

  const createItemMap = (zones: ZonesState): ItemLocationMap => {
    const map = {} as ItemLocationMap;
    for (const zoneId of dzs) {
      for (const item of zones[zoneId]) {
        map[item] = zoneId
      }
    }

    return map
  }

  // const [zones, setZones] = useState<ZonesState>(createInitialZones);
  const [zones, setZones] = useState<ZonesState>(() => {
    if (typeof window === "undefined") return createItemMap(createInitialZones());

    const stored = localStorage.getItem("zones");

    if (!stored) return createInitialZones();

    try {
      const parsed = JSON.parse(stored);

      // ensure all zones exist
      const base = createInitialZones();

      for (const key in base) {
        if (!parsed[key]) {
          parsed[key] = [];
        }
      }

      return parsed;
    } catch {
      return createInitialZones();
    }

    // if (stored) {
    //   return JSON.parse(stored);
    // }

    // return createInitialZones();
  });

  useEffect(() => {
    localStorage.setItem("zones", JSON.stringify(zones));
  }, [zones]);

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
      let oldZone: Location5 | null = null; //☹️

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
        [newZone]: [...prev[newZone], activeId],
      };
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

export default Dnd5Copy2;

// notes\dnd5-explanation.md