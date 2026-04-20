//* 🧠 Removing an item from state (React)
setFiles((prev) => prev.filter((_, i) => i !== index));

/*
🔥 What’s happening here?

- prev → current state (array of files)
- We create a NEW array (important: no mutation)
- We remove the item at "index"

💀 Translation:
"Keep everything EXCEPT the one at this index"
*/


//* ⚙️ How .filter() actually works

/*
.filter() = array gatekeeper 🚪

It loops over every item and asks:
👉 "Should I keep this?"

array.filter((item, index, array) => {
  return true  → ✅ keep it
  return false → ❌ remove it
});

- item  → current value
- index → position
- array → full array (rarely needed)
*/


//* 🧩 Core rule (burn this into your brain)
/*
👉 filter() keeps items that return TRUTHY
👉 removes items that return FALSY
*/


//* 🔥 Example 1: Basic filtering (numbers)

const nums = [1, 2, 3, 4, 5];

const even = nums.filter(n => n % 2 === 0);

// ✅ Result: [2, 4]
// "Keep numbers divisible by 2"


//* 🔥 Example 2: Remove item by index (your use case)

const files = ["A", "B", "C", "D"];
const index = 2;

const result = files.filter((_, i) => i !== index);

// ✅ Result: ["A", "B", "D"]


//* 🔥 Example 3: Filter objects (real-world)

const users = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true }
];

const activeUsers = users.filter(user => user.active);

// ✅ Result:
// [
//   { name: "A", active: true },
//   { name: "C", active: true }
// ]


//* 🧠 Mental model

/*
filter() = "Give me only what passes this rule"

You define the rule.
filter enforces it.
*/


//* 💡 Pro tips (future you will thank you)

/*
✔ Use "_" when you don’t need the value
   (_, i) => i !== index

✔ Always return something
   ❌ { x > 2 }  → broken
   ✅ x => x > 2

✔ Prefer IDs over index in real apps
   index can betray you when list changes 😈

✔ filter() NEVER mutates original array
   → safe for React state
*/


//* ⚡ Bonus: clean trick

const messy = [0, "hello", "", null, 42];

const clean = messy.filter(Boolean);

// ✅ Result: ["hello", 42]
// removes all falsy values automatically