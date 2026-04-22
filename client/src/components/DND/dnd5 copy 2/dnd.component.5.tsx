"use client";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { DropZone, Location5 } from "./util/dropZone";

const dzs: Location5[] = ["dz-1", "dz-2", "dz-3", "dz-4", "dz-5"];
export type boxType = "box-1" | "box-2";

type ZonesState = Record<Location5, boxType[]>;

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

  // const [zones, setZones] = useState<ZonesState>(createInitialZones);
  const [zones, setZones] = useState<ZonesState>(() => {
    if (typeof window === "undefined") return createInitialZones();

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

//* 1. createInitialZones
//why: it will create initial zone state {"dz-1": ["box-1"], "dz-2": ["box-2"], "dz-3": []} another eg. {"dz-1": ["box-1", "box-2"]} if a zone has 2 dropBox that's how it would look
// how :

//* zone state :
// why: it will store Record<Location5, boxType[]>; this type of object, so we can use it to show the DropZone current location for ui
// how :

//* zone state initial store : set the initial value of the store from local store
//? how :
//  (we store the zones state in local store) ,
//  well check if window is undefine or not, if true then : return createInitialZones() <- store this as initial state , if false move on :
// const store = get the local store value with key: "zones" (we saved it previously)
// if store = false : then return createInitialZones
// try {} :
// const parsed = convert the stored (which is a JSON string) convert in to js object
// const base = createInitialZone()
// for key in base , we are taking key from current key-value in base and checking if it real thing by checking the parsed[key] the key is from base which should exist in the local store if it does not then we create one and make it empty for initial state parsed[key] = []
// e.g. : 1️⃣ key = "dz-1" if (!parsed["dz-1"]) 👉 exists → do nothing .  2️⃣ key = "dz-3" if (!parsed["dz-3"]) 👉 doesn’t exist → TRUE So: parsed["dz-3"] = []
// then we return the parsed as a initial state

// final result parsed = {
//   "dz-1": ["box-1"], // this should be as localStore has it just a demo
//   "dz-2": ["box-2"],
//   "dz-3": [],
//   "dz-4": [],
//   "dz-5": [],
// }
// 👉 Now it's complete and safe

// if anything goes wrong then well simply return the createInitialZones()

//* Zone state initialization from localStorage

//? Goal:
// Load zones from localStorage if possible,
// otherwise fall back to default (createInitialZones)

// Step 1:
// Check if we are on the client (browser)
// if NOT (window is undefined) → return default state

// Step 2:
// Get stored data from localStorage using key "zones"

// if no stored data → return default state

// Step 3:
// try to safely parse stored JSON

// const parsed = JSON.parse(stored)
// const base = createInitialZones()  // this is the correct structure

// Step 4:
// Fix missing zones (important)
// loop through base (source of truth)

// for each key in base:
//   if parsed[key] does NOT exist:
//     create it as empty array

// Example:
// key = "dz-1"
// parsed["dz-1"] exists → do nothing

// key = "dz-3"
// parsed["dz-3"] missing → create it
// parsed["dz-3"] = []

// Step 5:
// return parsed → now it's complete + safe

// Final result example:
// parsed = {
//   "dz-1": ["box-1"], // from localStorage
//   "dz-2": ["box-2"],
//   "dz-3": [],        // added if missing
//   "dz-4": [],
//   "dz-5": [],
// }

// Step 6:
// if anything fails (bad JSON, crash, etc)
// catch → return createInitialZones()

// ✅ Result:
// - no crashes
// - no missing zones
// - always valid structure

//* useEffect()
// goal: storing the zones object in the localStorage as key name "zones" every time the zones changes
// how

//* handleDragEnd
// goal : handleDragEnd
// how :
// step 1 : take event as props
// step 2 : take active and over from event, active.id = who is being dragged, over.id = this is the drop zone id, out side of the drop zone over === null
// step 3 :  if (!over || !dzs.includes(over.id as Location5)) return;
// goal :  the zone over can be null or over.id === which is the drop zone must have it in the dzs if it false then return
// step 4 : const activeId = active.id as boxType one of the boxType
// step 5 : const newZone = over.id as Location5 one of the Location5
// step 6 : setZones()
// goal:  (remember: the setZones what's ZoneState type object , aka {location one of the dz- , and a array of box which can be one or many box-1}  ) it to set new zones according to ui
// step 1 : (prev) = > {} prev is currently stored key-value pairs
// step 2 : let oldZone : Location5 | null = null; it stores key of the zones
// step 3 : for (const zoneId of dzs) {} , if the activeId `the current box id that im moving` is include in (prev[zoneId]) `current zones state key-value pare with zoneId<- current zone id that are being check by for loop`  or not? if true then oldZone = zoneId `the drop zone "dz-x"` then brake

// step 4 : if (!oldZone) return prev  
// goal : If we couldn’t find the box in any zone, don’t touch state

// step 5 : if (oldZone === newZone) return prev
// goal : if the hox is in the same zone then don't touch state

// step 6 :
// how: return {...prev,}
// spared the the previous object / key-value pair
// [oldZone]: prev[oldZone].filter((id) => id !== activeId), 
// [oldZone] variable we previously made and also it's a zone where we previously keeped the drag box, 
//goal: we want the key value to remove previous box that we removed from that zone , and important remove only the box form the key and keep other boxes value at that key arr "dz-1": ["box-1" , "box-2"] -> move box-1 to dz-3 -> "dz-1": ["box-2"]
// why we are doing this other wise the box will just appear in both of the d-zone , then well add the box in newZone
// how : 
// [oldZone]  the old zone now have currently `that about be prev zone` having zone "dz-1" and we are keeping as the key :
// [oldZone] : prev[oldZone].filter((id) => id !== activeId), ` this will be value here ` ane the oldZone is the key of this value 
//  we are filtering the and taking only the value from the prev[oldZone] that does not match with the activeId "box-1" that we removed, and well add this in the newZone

// [newZone] : [...prev[newZone], activeId]
// the new key is newZone : and the valu
// es are spared previous values and add new one activeId


// return 
// DndContext onDragEnd={handleDragEnd}
// goal : so when the drag end and we keep box in other zone it calls handleDragEnd

// dzs.map()
// goal : it will loop through every element and make same amount of jsx as the dzs
// well pass each id = {drop zone} and items = {zones[dz]} <- the array value at that dz key


///** */ drop zone :
// take the id ={key/dz} and items = {[the box array]}
// const setNodeRef and isOver from useDroppable({id}) pass the id ={key/dz}, 
// define style
// return mark the div as the droppable zone with ref={setNodeRef} and style it will make the div as a droppable zone
// items.map() take the arr items and map through all the value 
// and draggableBox and give it key={itemId/'box-x'} and itemId={itemId/"box-x"}

///** */ Draggable Box
// take the id={"box-1"}
// take setNodeRef attributes, listeners, transform from useDraggable
// define style
// in return make the div as a draggable box and give style and other spread operator {...something} is a spread operator it take all the properties inside an object and spread them as individual props onto the element

// const attrs = {
//   id: "box",
//   className: "active",
//   tabIndex: 0
// }

//  Instead of writing:
// <div id="box" className="active" tabIndex={0}>

//  You can write:
// <div {...attrs}>
//  → same result!