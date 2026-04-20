import React from "react";
import Dnd2 from "./dnd2/dnd.component.1";
import Dnd3 from "./dnd3/dnd.component.3";
import Dnd4 from "./dnd4/dnd.component.4";
import Dnd5 from "./dnd5/dnd.component.5";
import Dnd5Copy from "./dnd5 copy/dnd.component.5";
import Dnd5Copy2 from "./dnd5 copy 2/dnd.component.5";
// import Dnd5Copy2 from "./dnd5 copy/dnd.component.5";

const DNDComponent = () => {
  return (
    <div>
      <h1>dnd2</h1>
      <Dnd2 />

      <h1>dnd3</h1>
      <Dnd3 />

      <h1>dnd4</h1>
      <Dnd4 />

      <h1>dnd5</h1>
      <Dnd5 />

      <h1>Dnd5Copy</h1>
      <Dnd5Copy />
      
      <h1>Dnd5Copy2</h1>
      <Dnd5Copy2 />
    </div>
  );
};

export default DNDComponent;
