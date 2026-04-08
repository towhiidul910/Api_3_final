// pure function

let num = 123;

function toString(val) {
  num = val;

  return val.toString();
}

const str = toString(num);

// immutable data
const data = Object.freeze([1,2,3,4,5,6]);

// function as argument

const addEmoji = (val) => toString(val) + "✅"

const emojiData = data.map(addEmoji)

// function as return value

const appendEmoji = (fixed) => (dynamic) => fixed + dynamic

const rain = appendEmoji('🌦️');
const sun = appendEmoji("🌞");



const Function = () => {
  console.log("the type is", typeof str); // string

  console.log(emojiData) // ["1✅",    "2✅",    "3✅",    "4✅",    "5✅",    "6✅"]

  console.log(rain("today"))
  console.log(sun("today"))
  return <div>Function</div>;
};

export default Function;
