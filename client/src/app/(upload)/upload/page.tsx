"use client";

import { ChildComponent } from "@/components/upload/get/test/Child";
import UploadAvatar from "@/components/upload/UploadAvatar";
import UploadAvatarR from "@/components/upload/UploadAvatar.with.Redux";
import { useState } from "react";

export default function ProfilePage() {
  const [avatar, setAvatar] = useState<string | null>(null);

  const [count, setCount] = useState(0);
  console.log("Parent rendered");

  const handleClick = () => {
    console.log("Clicked", count);
  };

  return (
    <>
      <div className="gap-2 py-2">
        <UploadAvatar currentAvatar={avatar} onAvatarUpdate={setAvatar} />

        <UploadAvatarR currentAvatar={avatar} onAvatarUpdate={setAvatar} />
      </div>
      <button
        className="bg-blue-500 mr-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        normal
      </button>
      <button
        className="bg-blue-500 mr-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        Count {count}
      </button>
      <ChildComponent onClick={handleClick} name="normal Child" />
    </>
  );
}
// how do i know that on click the handleClick A then B then C but , what does it mean , i can undrastand that   >
      //   Count {count}
      // </button>  this count can render the whole page and that's why i see the parents and child render in console , but what does the handleclick A b, c mean in that sence , 
      // hypothasis: the every time useState change the page will be render regardless but we cant stop the page from re-rendering by using useCallback (i dont know how the useCallback wark yet ), so the re-render page is not same as creating new function in every render somehow 
      /// what does it mean "creates a new function" anyway

// how do i know that component re renders ,
// it still complicated


// ok that what im getting when i click the btn the parents renders and child renders (in the the console), doest it mean whole component inclucing the child re renders ? 