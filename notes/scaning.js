//? "==="
// | Type    | Comparison behavior  |
// | ------- | -------------------- |
// | number  | value comparison     |
// | string  | value comparison     |
// | boolean | value comparison     |
// | array   | reference comparison |
// | object  | reference comparison |

// ✔ Correct idea:
// primitives (number/string/boolean) → compare VALUE
// objects/arrays → compare REFERENCE (memory address)


// -----------------------------

// e.g.

// numbers
a = 1, b = 1
a === b -> true
// same value → true

// arrays (different references)
[1] === [1] -> false
// same content, different memory → false

// arrays assigned separately
a = ["box-1"], b = ["box-1"]
a === b -> false
// different references → false

// strings
a = "box-1", b = "box-1"
a === b -> true
// primitives → value comparison

// objects
a = { box: "box-1" }, b = { box: "box-1" }
a === b -> false
// different objects in memory → false

// mixed types
["box-1"] === "box-1" -> false
// array vs string → different types → always false


// -----------------------------

//? includes()

// includes() checks whether an ARRAY contains a VALUE
// using strict equality (===) internally

// arr.includes(value)

// scans left → right
// stops when match is found


// -----------------------------

// examples:

a = ["box-1", "box-2"]

a.includes("box-1") -> true
// found exact string match inside array


a.includes("box-3") -> false
// not in array


// ❌ WRONG idea:
a.includes(["box-1"]) -> false
// because you're checking for an ARRAY inside an array of STRINGS


// ✔ correct reasoning:
a.includes(b[0]) -> true
// b[0] = "box-1" (string), so match works


// -----------------------------

// ⚠️ Important correction:

// includes does NOT check arrays deeply
// it only checks direct elements using ===

// so:
["box-1", "box-2"].includes("box-1") -> true
// works because element types match (string === string)


//? "some()"

// a = ["box-1", "box-2"];
// b = ["box-1", "box-2", "box-3"];

// b.some(item => a.includes(item));

// ✔ What it means:
// Check if ANY item in b exists inside array a

// -----------------------------

// How it works:

// Step-by-step execution:

// 1️⃣ item = "box-1"
// a.includes("box-1") → true
// 👉 some() immediately stops here

// 2️⃣ It does NOT check:
// "box-2"
// "box-3"

// -----------------------------

// ✔ Result:
true

// -----------------------------

// 🧠 Key idea:

// some() = OR condition on arrays
// → returns true if ANY element passes the test
// → stops as soon as it finds the first match

// -----------------------------

// ✔ Final mental model:

// b.some(item => a.includes(item))
// = "Does b share at least one element with a?"

//? map() https://claude.ai/share/c0c7bcaa-ead2-4489-bc59-ece8fdc9525b


// This is a JavaScript **array filter** operation. Here's a breakdown:

// ```javascript
// filter((id) => id !== activeId)
// ```

// **What it does:** Removes one specific element from an array — the one that matches `activeId`.

// **How it works:**

// `filter()` loops through every element in the array and keeps only the elements where the callback returns `true`.

// - `(id) => id !== activeId` — for each element (`id`), keep it **only if** it does **not equal** `activeId`
// - The element that *equals* `activeId` returns `false`, so it gets **dropped**

// **Example:**

// ```javascript
const activeId = 3;
const ids = [1, 2, 3, 4, 5];

const result = ids.filter((id) => id !== activeId);
//  result → [1, 2, 4, 5]  ← 3 is removed
// ```

// **Key points:**
// - The original array is **not mutated** — `filter()` returns a new array
// - If `activeId` doesn't exist in the array, the array is returned unchanged
// - If there are **duplicates** of `activeId`, all of them get removed

// **Common use case** — removing an item from a React state list:

// ```javascript
// setItems(items.filter((id) => id !== activeId));
// ```

// This is the standard pattern for deleting an item by ID without mutating state.



// ---

// Great question! It's all about **what the arrow function returns**.

---

// **1. `map(() => ...)`//** — returns a single expression directly
```javascript
nums.map((n) => n * 2)
// → [2, 4, 6, 8]
```
// Just a simple value, no brackets needed.

// ---

// **2. `map(() => ( ... ))`** — returns JSX or an object
```javascript
// JSX:
users.map((user) => (
  <div>{user}</div>
))

// Object (MUST use () or JS thinks {} is a code block):
users.map((user) => ({
  name: user,
  age: 25
}))
```
// `()` just **wraps** the return value, mainly for **multiline readability** or **returning objects**.

// ---

// **3. `map(() => { ... })`** — a code block, **must use `return`**
```javascript
nums.map((n) => {
  const doubled = n * 2;
  return doubled;   // ← without this, returns undefined!
})
```
`{}` // means *"this is a block of code"* — you have to **explicitly return**.

// ---

// **4. `map(() => [ ... ])`** — returns an array
```javascript
nums.map((n) => [n, n * 2])
// → [[1, 2], [2, 4], [3, 6], [4, 8]]
```
// Each element gets transformed into a **new array**.

// ---

// **Summary table:**

// | Syntax          | What it returns               |
// |---              |---                            |
// | `() => ...`     | single expression             |
// | `() => (...)`   | multiline expression / JSX    |
// | `() => {...}`   | code block (needs `return`)   |
// | `() => [...]`   | an array                      |

// ---

// **Most common mistake:**
```javascript
// ❌ returns undefined - forgot return
nums.map((n) => {
  n * 2
})

// ✅ correct
nums.map((n) => {
  return n * 2
})
```

// {...something} is the spread operator — it takes all the properties inside an object and spreads them as individual props onto the element.

// Simple example:
// javascriptconst attrs = {
//   id: "box",
//   className: "active",
//   tabIndex: 0
// }

// // Instead of writing:
// <div id="box" className="active" tabIndex={0}>

// // You can write:
// <div {...attrs}>
// // → same result!