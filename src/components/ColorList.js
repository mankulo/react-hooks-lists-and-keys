import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "forestgreen",
    "babyblue",
  ];

  const colorElements = colors.map((color) => {
    return <li key={color} style={{color :color}}>{color}</li>
  })
    return (
      <div>
        <h1>Top 5 colors</h1>
         <ol>
          
          {/*Displays the color list here*/}
          {colorElements}
         </ol>
      </div>
    )

  
}

export default ColorList;
