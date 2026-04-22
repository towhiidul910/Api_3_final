# DnD Optimization — O(n) vs O(1) Explanation

---

## The Old Way — O(n) Loop

**Why:** When a drag ends, we need to know which zone the box came from.
In the old version we had no direct way to ask *"where is box-1 right now?"*
So we had to check every zone one by one until we found it.

**How:**
```ts
setZones((prev) => {
  // prev = the current zones state, before any new update is applied
  for (const zoneId of dzs) {
    if (prev[zoneId].includes(activeId)) {
      oldZone = zoneId
      break
    }
  }
})
```

`prev` is a snapshot of zones **exactly as it is right now** before we apply any new change.
So we are asking `prev` — zone by zone — *"do you have this box?"*

---

## O(n) — The Scan Problem

**Example:** 4 boxes, 3 zones, looking for `box-1`:

```ts
prev = {
  "dz-1": ["box-2"],
  "dz-2": ["box-4", "box-2", "box-3"],
  "dz-3": ["box-1"]
}
```

The scan goes like this:
- scan 1 → look at `dz-1`
- scan 2 → `dz-1[0]` = `"box-2"` → not `box-1` → move on
- scan 3 → look at `dz-2`
- scan 4 → `dz-2[0]` = `"box-4"` → false → move on
- scan 5 → `dz-2[1]` = `"box-2"` → false → move on
- scan 6 → `dz-2[2]` = `"box-3"` → false → move on
- scan 7 → look at `dz-3`
- scan 8 → `dz-3[0]` = `"box-1"` → ✅ found it! stop.

**Total = 8 scans** just to find one box.

**The problem:** Imagine 1000 zones, each with 500 boxes, and `box-1` is in the very last zone at the very last position. That is **500,000 scans** on every single drag. The more data you have, the more scans you do. That is what **O(n)** means.

---

## The Goal — O(1)

**Why:** We want to find the box location in **1 action** no matter how many zones or boxes exist.

**How:** Store the answer **before we even need it.**

Instead of searching at drag time:
> *"where is box-1... let me check every zone..."*

We already have it written down:
```ts
itemLocation = {
  "box-1": "dz-3",
  "box-2": "dz-1",
}
```

At drag time we just read it:
```ts
const oldZone = itemLocation["box-1"]  // → "dz-3" — done. no scanning. 1 action.
```

5 zones or 1000 zones — still **1 action**. That is **O(1)**.

---

## How Do We Build the Sticky Note? — `createItemMap()`

**Why:** We need to flip the zones object inside out.

Zones looks like this — **zone points to boxes:**
```ts
{
  "dz-1": ["box-1"],
  "dz-2": ["box-2"],
}
```

We want the sticky note to look like this — **box points to zone:**
```ts
{
  "box-1": "dz-1",
  "box-2": "dz-2",
}
```

Same data, just flipped direction. Box is now the key, zone is now the value.

**Another example — multiple boxes in same zone:**
```ts
// zones:
{
  "dz-1": ["box-1", "box-2"],
}

// sticky note result:
{
  "box-1": "dz-1",   // both point to same zone
  "box-2": "dz-1",   // both point to same zone
}
```

Every box gets its own line — even if 100 boxes share the same zone.

---

## How `createItemMap()` Actually Flips It

**Goal:** Create a new object where box is the key and zone is the value.

**How (step by step):**

```ts
const createItemMap = (zones: ZonesState): ItemLocationMap => {
  const map = {} as ItemLocationMap   // start with empty sticky note

  for (const zoneId of dzs) {           // step 1: loop every zone id
    for (const item of zones[zoneId]) { // step 2: loop every box inside that zone
      map[item] = zoneId                // step 3: flip it — box points to zone
    }
  }

  return map  // sticky note is ready
}
```

**Walking through a real example:**
```ts
zones = {
  "dz-1": ["box-1", "box-2"],
  "dz-2": ["box-3"],
  "dz-3": []
}
```

- outer loop → `zoneId = "dz-1"` → `zones["dz-1"]` = `["box-1", "box-2"]`
  - inner loop → `item = "box-1"` → `map["box-1"] = "dz-1"` → map = `{ "box-1": "dz-1" }`
  - inner loop → `item = "box-2"` → `map["box-2"] = "dz-1"` → map = `{ "box-1": "dz-1", "box-2": "dz-1" }`
- outer loop → `zoneId = "dz-2"` → `zones["dz-2"]` = `["box-3"]`
  - inner loop → `item = "box-3"` → `map["box-3"] = "dz-2"` → map = `{ "box-1": "dz-1", "box-2": "dz-1", "box-3": "dz-2" }`
- outer loop → `zoneId = "dz-3"` → `zones["dz-3"]` = `[]` → empty → nothing to write

**Final sticky note:**
```ts
{
  "box-1": "dz-1",
  "box-2": "dz-1",
  "box-3": "dz-2",
}
```

---

## Then We Store It in State

```ts
const [itemLocation, setItemLocation] = useState<ItemLocationMap>(() =>
  createItemMap(createInitialZones())
)
```

The sticky note is built **once at app load** and stored in `itemLocation`.
From that point — the answer is always sitting there, ready to be read instantly.

> ⚠️ **Bug note:** It should use the loaded `zones` state (from localStorage) not `createInitialZones()`.
> If the user moved boxes yesterday and reloads the page:
> - `zones` → correctly restores from localStorage ✅
> - `itemLocation` → resets to default positions ❌
> They go out of sync until the first drag.

---

## Then Every Time a Box Moves — Update the Note

```ts
// update zones (for the UI)
setZones((prev) => ({
  ...prev,
  [oldZone]: prev[oldZone].filter((id) => id !== activeId),
  [newZone]: [...prev[newZone], activeId],
}))

// update the sticky note too — or they go out of sync
setItemLocation((prev) => ({
  ...prev,
  [activeId]: newZone   // "box-1" now lives in "dz-4" — overwrite the old entry
}))
```

So the sticky note stays fresh after every drag. Always O(1) next time.

---

## The Full Simple Flow

```
App loads
  → createItemMap() builds the sticky note from initial zones
  → stored in itemLocation state
        ↓
Drag happens
  → read itemLocation["box-1"] → "dz-3"  (O(1) — 1 action)
        ↓
Box moves
  → update zones (for UI)
  → update itemLocation (keep note fresh)
        ↓
Next drag → answer is still already there → O(1) again
```

---

## Summary

| | O(n) old way | O(1) new way |
|---|---|---|
| How it finds the zone | Loops through every zone and every box inside | Direct read from `itemLocation` |
| Work with 5 zones | Up to 5+ scans | Always 1 action |
| Work with 1000 zones | Up to 500,000 scans | Still always 1 action |
| Extra cost | None | Must keep `zones` and `itemLocation` in sync |
| Risk | Slow with big data | Bug if `itemLocation` is not initialized from loaded `zones` |
