
"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { DropZone, Location5 } from "./util/dropZone";

export type boxType = "box-1" | "box-2";

type ZonesState = Record<Location5, boxType[]>;
type ItemLocationMap = Record<boxType, Location5>;

const dzs: Location5[] = ["dz-1", "dz-2", "dz-3", "dz-4", "dz-5"];

const createInitialZones = (): ZonesState => {
  const base = {} as ZonesState;

  dzs.forEach((dz) => {
    base[dz] = [];
  });

  base["dz-1"].push("box-1");
  base["dz-2"].push("box-2");

  return base;
};

// 🔥 Build reverse lookup map
const createItemMap = (zones: ZonesState): ItemLocationMap => {
  const map = {} as ItemLocationMap;

  for (const zoneId of dzs) {
    for (const item of zones[zoneId]) {
      map[item] = zoneId;
    }
  }

  return map;
};

export default function DndOptimized() {
  const [zones, setZones] = useState<ZonesState>(() => {
    if (typeof window === "undefined") return createInitialZones();

    const stored = localStorage.getItem("zones");

    if (!stored) return createInitialZones();

    try {
      const parsed = JSON.parse(stored);
      const base = createInitialZones();

      for (const key in base) {
        if (!parsed[key]) parsed[key] = [];
      }

      return parsed;
    } catch {
      return createInitialZones();
    }
  });

  // 🔥 Fast lookup state
  const [itemLocation, setItemLocation] = useState<ItemLocationMap>(() =>
    createItemMap(zones)
  ); // this is the sticky note

  useEffect(() => {
    localStorage.setItem("zones", JSON.stringify(zones));
  }, [zones]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || !dzs.includes(over.id as Location5)) return;

    const activeId = active.id as boxType;
    const newZone = over.id as Location5;

    // ⚡ O(1) lookup
    const oldZone = itemLocation[activeId];

    if (!oldZone || oldZone === newZone) return;

    // update zones
    setZones((prev) => ({
      ...prev,
      [oldZone]: prev[oldZone].filter((id) => id !== activeId),
      [newZone]: [...prev[newZone], activeId],
    }));

    // update lookup map
    setItemLocation((prev) => ({
      ...prev,
      [activeId]: newZone,
    }));
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <h1>Optimized Drag System</h1>

      <div style={{ display: "flex", gap: 20 }}>
        {dzs.map((dz) => (
          <DropZone key={dz} id={dz} items={zones[dz]} />
        ))}
      </div>
    </DndContext>
  );
}


// notes\dnd-o1-optimization.md