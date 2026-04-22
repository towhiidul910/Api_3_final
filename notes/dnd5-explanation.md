# DnD5 Component — Code Explanation

---

## `createInitialZones()`

**Why:** It builds the starting state of all drop zones.
The shape looks like this:

```ts
{
  "dz-1": ["box-1"],
  "dz-2": ["box-2"],
  "dz-3": [],
  "dz-4": [],
  "dz-5": []
}
```

If a zone has two boxes, it would look like: `"dz-1": ["box-1", "box-2"]`.

**How:** It creates an empty base object, loops through all zone ids (`dz-1` to `dz-5`), sets each to an empty array, then manually assigns `box-1` to `dz-1` and `box-2` to `dz-2`.

---

## Zone State

**Why:** It stores the current position of every box. The type is `Record<Location5, boxType[]>` — meaning: an object where each key is a zone id (`dz-1`, `dz-2`, ...) and each value is an array of boxes currently in that zone.

This is what the UI reads to know which boxes to render inside which drop zone.

---

## Zone State — Loading from localStorage

**Why:** So the user's drag positions are saved and restored after a page refresh.

**How (step by step):**

**Step 1 — Are we in the browser?**
If `window` is undefined (server-side render), return `createInitialZones()` immediately.

**Step 2 — Get stored data:**
```ts
const stored = localStorage.getItem("zones")
```
If nothing is stored yet, return `createInitialZones()`.

**Step 3 — Parse the JSON:**
```ts
const parsed = JSON.parse(stored)
```
`localStorage` only saves strings, so we convert it back to a JS object.

**Step 4 — Fix any missing zones:**
```ts
const base = createInitialZones()
for (const key in base) {
  if (!parsed[key]) {
    parsed[key] = []
  }
}
```
We loop through `base` (which has all 5 zones) and check if `parsed` has each one.
- `key = "dz-1"` → exists in parsed → do nothing
- `key = "dz-3"` → missing in parsed → add it as `[]`

This protects us if a new zone was added after the user's last save.

**Step 5 — Return the fixed parsed object:**
```ts
// Final result:
{
  "dz-1": ["box-1"],  // from localStorage
  "dz-2": ["box-2"],  // from localStorage
  "dz-3": [],         // added because it was missing
  "dz-4": [],
  "dz-5": []
}
```

**Step 6 — If anything crashes:**
The `catch` block returns `createInitialZones()` — so we never break the app.

---

## `useEffect()`

**Why:** Every time `zones` changes (a box is moved), we save the new state to localStorage.

**How:**
```ts
useEffect(() => {
  localStorage.setItem("zones", JSON.stringify(zones))
}, [zones])
```
`JSON.stringify` converts the object to a string because localStorage only stores strings.
The `[zones]` dependency means this runs only when `zones` actually changes.

---

## `handleDragEnd()`

**Why:** This is called the moment the user drops a dragged box. It figures out where the box came from and where it's going, then updates state.

**How (step by step):**

**Step 1 — Get drag info from the event:**
```ts
const { active, over } = event
// active.id = the box being dragged e.g. "box-1"
// over.id   = the drop zone it was released on e.g. "dz-3"
// over = null if dropped outside any zone
```

**Step 2 — Guard clause:**
```ts
if (!over || !dzs.includes(over.id as Location5)) return
```
If `over` is null (dropped outside), or the target isn't a valid zone — do nothing.

**Step 3 — Name the important values:**
```ts
const activeId = active.id as boxType   // "box-1"
const newZone  = over.id as Location5   // "dz-3"
```

**Step 4 — Find where the box currently lives (`oldZone`):**
```ts
let oldZone: Location5 | null = null
for (const zoneId of dzs) {
  if (prev[zoneId].includes(activeId)) {
    oldZone = zoneId
    break
  }
}
```
We loop through every zone and check which one currently contains the dragged box.

**Step 5 — Two more guard clauses:**
```ts
if (!oldZone) return prev        // box not found anywhere — don't touch state
if (oldZone === newZone) return prev  // dropped into the same zone — don't touch state
```

**Step 6 — Update the zones:**
```ts
return {
  ...prev,                                              // keep all other zones the same
  [oldZone]: prev[oldZone].filter(id => id !== activeId), // remove box from old zone
  [newZone]: [...prev[newZone], activeId],               // add box to new zone
}
```

Why the filter? Without it the box would appear in **both** zones at the same time.

Example:
```
Before:  "dz-1": ["box-1", "box-2"],  "dz-3": []
Move box-1 to dz-3
After:   "dz-1": ["box-2"],           "dz-3": ["box-1"]
```

---

## JSX — `DndContext` and `dzs.map()`

**`DndContext onDragEnd={handleDragEnd}`**
This wraps everything. When a drag ends anywhere inside it, it calls `handleDragEnd`.

**`dzs.map()`**
Loops through all 5 zone ids and renders one `<DropZone>` for each:
```tsx
<DropZone key={dz} id={dz} items={zones[dz]} />
//                          ↑ the array of boxes currently in this zone
```

---

## `DropZone` Component

**Takes:** `id` (zone name) and `items` (array of box ids in this zone).

**`useDroppable({ id })`** gives us:
- `setNodeRef` — marks the div as a drop target
- `isOver` — true when a draggable is hovering over this zone (used for the green highlight)

**`items.map()`** — loops through the box ids and renders one `<DraggableBox5>` per box.

---

## `DraggableBox5` Component

**Takes:** `id` — one of the box ids e.g. `"box-1"`.

**`useDraggable({ id })`** gives us:
- `setNodeRef` — marks the div as draggable
- `attributes` — accessibility props (aria, role, etc.)
- `listeners` — mouse/touch event handlers (onMouseDown, onPointerDown, etc.)
- `transform` — live position offset while dragging

**Spread operator explained:**
```tsx
<div {...listeners} {...attributes}>
```
This is shorthand. Instead of writing every prop manually:
```tsx
<div onPointerDown={...} role="button" tabIndex={0} ...>
```
The spread takes all properties from the object and applies them individually. Cleaner and safer.

**`isMounted` check:**
```ts
const [isMounted, setIsMounted] = useState(false)
useEffect(() => { setIsMounted(true) }, [])
if (!isMounted) return null
```
`useDraggable` uses browser APIs that don't exist on the server. This makes sure the box only renders after the component is mounted in the browser — preventing crashes during server-side rendering.
