import { useDroppable } from "@dnd-kit/core";
// import DraggableBox4 from "./droppableBox";
import DraggableBox5 from "./droppableBox";
import { boxType } from "../dnd.component.5";

export type Location5 = "dz-1" | "dz-2" | "dz-3" | "dz-4" | "dz-5";

export const items: boxType[]= ["box-1", "box-2"]

export function DropZone({
  id,
  itemLocations,
}: {
  id: Location5;
  itemLocations: Record<boxType, Location5>;
}) {
  const { setNodeRef, isOver } = useDroppable({ id });

  const style = {
    width: 200,
    height: 200,
    border: "2px dashed black",
    background: isOver ? "#d1e7dd" : "transparent",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {id}
        {/* Render items only if their location matches this zone */}
      {items
        .filter((itemId) => itemLocations[itemId] === id)
        .map((itemId) => (
          <DraggableBox5 id={itemId} key={itemId} />
        ))}
    </div>
  );
}


// ## 🧠 DnD Kit + React State Cheat Sheet (Your Setup)

// ---

// # 🎮 DND-KIT CORE CONCEPTS

// ## 🟦 DndContext

// ```ts
// <DndContext onDragEnd={handleDragEnd}>
// ```

// 👉 Wraps everything that can be dragged/dropped
// 👉 Without it → nothing works

// ---

// ## 🟦 Draggable

// ```ts
// useDraggable({ id: "box-1" })
// ```

// ### What it does:

// * Marks element as draggable
// * Gives it an ID (`active.id`)
// * Tracks drag state

// ---

// ## 🟩 Droppable

// ```ts
// useDroppable({ id: "dz-1" })
// ```

// ### What it does:

// * Marks area as drop target
// * Registers it for collision detection
// * Becomes `over.id`

// ---

// # 🧠 EVENT SYSTEM

// ## 🟨 DragEndEvent

// Triggered when user releases drag

// ```ts
// handleDragEnd(event: DragEndEvent)
// ```

// ### Main parts:

// ```ts
// event.active.id  // 👈 what you dragged
// event.over.id    // 👈 where you dropped it
// ```

// ---

// ## 🟦 active

// 👉 The dragged item

// ```ts
// active.id = "box-1"
// ```

// Means:

// > You are dragging box-1

// ---

// ## 🟩 over

// 👉 Drop target

// ```ts
// over.id = "dz-3"
// ```

// Means:

// > You dropped on dz-3

// OR:

// ```ts
// over = null
// ```

// Means:

// > dropped outside valid zone

// ---

// # 🧱 STATE MANAGEMENT (YOUR SETUP)

// ## Record type

// ```ts
// Record<boxType, Location5>
// ```

// ### Meaning:

// ```ts
// {
//   "box-1": "dz-1",
//   "box-2": "dz-2"
// }
// ```

// 👉 box → location mapping

// ---

// ## Update pattern (IMPORTANT)

// ```ts
// setState(prev => ({
//   ...prev,
//   [active.id as boxType]: over.id as Location5
// }));
// ```

// ### What happens:

// 1. copy old state (`...prev`)
// 2. overwrite only one key
// 3. return new object

// ---

// # ⚡ OBJECT RULES

// ## 🧱 Object structure

// ```ts
// { key: value }
// ```

// ## 🧠 Dynamic key

// ```ts
// { [expression]: value }
// ```

// ---

// ## ❌ WRONG

// ```ts
// (active.id): value
// ```

// ## ❌ WRONG

// ```ts
// [key]: [value] // (if type is not array)
// ```

// ## ✅ CORRECT

// ```ts
// { [active.id]: over.id }
// ```

// ---

// # 🎮 DND FLOW (MENTAL MODEL)

// ```txt
// 1. grab box-1 → active = box-1
// 2. move over dz-3 → over = dz-3
// 3. release
// 4. update state:
//    box-1 → dz-3
// ```

// ---

// # 🧠 ACTIVE vs OVER

// | Term      | Meaning            |
// | --------- | ------------------ |
// | active    | item being dragged |
// | over      | drop target        |
// | null over | invalid drop       |

// ---

// # ⚙️ WHY IT WORKS

// DnD Kit uses:

// * DOM positions
// * collision detection
// * IDs you define

// So:

// ```txt
// box-1 overlaps dz-3 → over = dz-3
// ```

// ---

// # ⚠️ COMMON MISTAKES

// ### ❌ expecting duplicates in object

// Objects overwrite keys

// ---

// ### ❌ forgetting spread

// ```ts
// setState(prev => ({
//   ...prev, // REQUIRED
// }))
// ```

// ---

// ### ❌ not handling null over

// ```ts
// if (!over) return;
// ```

// ---

// # 💡 PRO TIPS

// ## ✔️ Use Record for DnD state

// Best for:

// * box → location mapping
// * fast lookup

// ---

// ## ✔️ Always think like this:

// ```txt
// active = source
// over = destination
// ```

// ---

// ## ✔️ Debug trick

// ```ts
// console.log(active, over);
// ```

// ---

// # 🔥 ULTRA TL;DR

// * `active` = dragged item
// * `over` = drop zone
// * `{ [key]: value }` = dynamic object update
// * `Record` = typed object map
// * DnD Kit = DOM collision + IDs + events

// ---

// If you want next cheat sheet level upgrade, I can make:
// 👉 **“DnD Kit mental map for building Trello / Notion style boards”**

