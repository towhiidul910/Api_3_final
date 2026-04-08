"use client";

import { ChildComponent } from "@/components/upload/get/test/Child";
import { useState, useCallback, useRef, useEffect } from "react";

export default function ProfilePage() {
  const [count, setCount] = useState(0);
  console.log("Parent rendered");

  // Normal function (recreated every render)
  const normalFn = () => {
    console.log("Normal handleClick Button");
  };

  // Memoized function (stays the same unless dependencies change)
  const memoFn = useCallback(() => {
    console.log("Memoized handleClick Button");
  }, []);

  // store previous versions
  const prevNormal = useRef<() => void | null>(null);
  const prevMemo = useRef<() => void | null>(null);

  useEffect(() => {
    if (prevNormal.current) {
      console.log(
        "normalFn same as previous?",
        prevNormal.current === normalFn,
      );
    }

    if (prevMemo.current) {
      console.log("memoFn same as previous?", prevMemo.current === memoFn);
    }

    prevNormal.current = normalFn;
    prevMemo.current = memoFn;
  });

  const handleCount = () => {
    console.log("handleCount Button");
    setCount(count + 1);
  };

  return (
    <>
      <button
        className="bg-blue-500 mr-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={normalFn}
      >
        Normal
      </button>
      <button
        className="bg-blue-500 mr-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={memoFn}
      >
        Memoized
      </button>
      <button
        className="bg-blue-500 mr-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleCount}
      >
        Count {count}
      </button>
      <ChildComponent onClick={normalFn} name="Normal Child" />
      <ChildComponent onClick={memoFn} name="Memoized Child" />
    </>
  );
}

// Question
// will setCount will the profilePage will re-render even if i use useCallback

// so the react will-rerender the child anyway even if the props don't change, so useCallback has nothing ot optimize, //? useCallback can't do anything by it self is it, it alloys need a memo is that correct

// useCallback → keeps the same function reference //? what does it mean?

// React.memo → checks if props changed //? i wanna test this in practical latter how?

//Only when both exist does React skip a render.

// is the goal is dont make child re-render when parent re-renders

// When you might want to stop child re-renders
// You optimize when:
// The child is expensive to render
// The child did not actually change
// The parent re-renders frequently

//* the goal:
//  is to prevent child re-render with parent's re-renders on command. It uses React.memo and checks if props changed.
// we don't alloys need it
//https://chatgpt.com/s/t_69aba2dc4dcc81918bc9b9b494aa6fff

// when we need it Examples:

// Big lists (hundreds of items)
// Charts
// Maps
// Drag-and-drop UIs
// Heavy calculations
// Large DOM trees

//** Very Very Important */
// useCallback does
// const handleClick = useCallback(() => {}, []);
// Now react reuse the same function
// render 1 : handleClick → address A
// render 2 : handleClick → address A
// new react sees : A === A
// and now with the React.memo: props same → skip render

// is there any way to feel physically feel and see that after using useCallback with every render handleClick says the same, and also compare the useCallback with not useCallback function compare ,
// because i understand but i cant see it
// Memoized handleClick Button 8 page.tsx:17:13 (does this after 8 click)
// Normal handleClick Button 8 page.tsx:12:13 (does thsi after 8 click)

// ya i got that but clicking the memorized and normal feels same without this compare
// handleCount Button page.tsx:21:13
// Parent rendered page.tsx:8:11
// Normal Child rendered Child.tsx:8:11
// child render

//* how useRef work : https://chatgpt.com/s/t_69abaeac5be08191954164f0203de239
