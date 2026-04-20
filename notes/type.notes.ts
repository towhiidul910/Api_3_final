[string]        // exactly ONE string
[number, number] // exactly TWO numbers

const oneValue: [string] = ["hello"]     // ✅
const wrong: [string] = ["a", "b"]       // ❌ error
const nums: number[] = [1, 2, 3, 4]  // ✅ any length