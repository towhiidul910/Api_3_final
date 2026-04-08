import React from "react";
type Props = {
  onClick: () => void;
  name: string;
};

 const ChildComponentBase = ({ onClick, name }: Props) => {
  console.log(`${name} rendered`);
  console.log("child render")

  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded mr-2"
      onClick={onClick}
    >
      {name} Button
    </button>
  );
};

// export default const r  React.memo(ChildComponent);


export const ChildComponent = React.memo(ChildComponentBase)

// https://chatgpt.com/s/t_69abb12e08148191bb18c18afbb317c2