
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

// , previously we use to check the useState zone value, and we check it one by one  for (const zoneId of dzs) {
//         if (prev[zoneId].includes(activeId)) {
//           oldZone = zoneId;
//           break;
//         }
//       } from the current state of zones because setZone((prev <- this is currently having state before inserthing new one we are about to do)) aim i got this part right?
// so we are checking all the dzs in the prev[zoneId] on by one and stop when we find a match ? but the problem is , for example we have 4 box box-1 box-2 box-3 box-4 and we have 3 dz-1 dz-2 dz-3 zones (prev) and now we have to found where the box one was previously so we can remove it from that zone and store the box in the new zone. we we check like : check zone dz-1 to find the lets say box-1 new cheking dz-1 does ["box-2"] does the dz-1 have box-1 here we useing 2 scans right one to see dz-1 and another one to see if dz-1[0] === "box-1" or not and see second dz-2 if the dz-2 ware to have 3 box ["box-4", "box-2" , "box-3"] we would check 4 time one scan dz-2 now inside dz-2 second scan dz-2[0] false move on 3rd scan dz-2[1] false move one 4th scan dz-2[2] false move one on so intotal scan 6 so far to next dz-3 first scan dz-3 senond scan dz-3[0] nwo dz[3] === "box-1" true so found one stop the scan so total scan is 7, did i get this part righ? and now if this would have big db then we got problem we would ahve soo many scans and we dont want that to happen ? did i got tht currect?
// so the goal is to use O[1] some how we have to know where the box is before hand so we can aboid scan and got it with in one scan , if we already know we would not have to scans the boxes one by one we just have the oldZone is this it?
// now how do we store the answer before we need it ?
// we create the the sticky note with this createItemMap() 
// it takes current zone state 
// {
//   "dz-1": ["box-1"],
//   "dz-2": ["box-2"],
// }
// and make it this from that: 
// {
//   "box-1": "dz-1",
//   "box-2": "dz-2",
// }
// another example with multiple box in sam zone :
// {
//   "dz-1": ["box-1", " box-2"],
// }
// to :
// {
//   "box-1": "dz-1"
//   "box-2": "dz-1"
// }
// then we store it in the itemLocation, then we have the note and we can have the location of the box and we get the location aka oldZone of the box by just itemLocation[the box] itemLocation["box-1"] = "dz-1" simple and we use that oldZone as we need

// now how does the createItemMap() flip the object?
// goal : it need to create a new object from the given object of the zones state where box will be the key and drop zone will be the value
// (zones: ZonesState): ItemLocationMap it take the zones as props , and define the type of createItemMpa : itemLocationMap
// create empty map as ItemLocationMap
// for every dzs value zoneId then take item from every zones use zoneId as key, 
// eg. if the zones = {"dz-1": ["box-1", "box-2"], "dz-2": ["box-3"]} -> for dzs of zoneId well take "dz-1" -> for zones["dz-1"] -> multiple box ["box-1", "box-2"] -> item = box-1 well work with this -> map[item] = [zoneId] ->  map["box-1"] = "dz-1" -> map = {"box-1": "dz-1"} 