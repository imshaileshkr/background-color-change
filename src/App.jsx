import { useState } from "react";

function App() {
  const [colorList] = useState([
    {
      type: "Red",
    },
    {
      type: "Green",
    },
    {
      type: "Blue",
    },
    {
      type: "Orange",
    },
    {
      type: "Black",
    },
    {
      type: "Cyan",
    },
    {
      type: "Deepskyblue",
    },
  ]);
  const [color, setColor] = useState(colorList[0].type);
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="flex justify-center pt-12">
          <h1 className="py-2 px-4 text-white font-medium rounded-md text-2xl">{color}</h1>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
          <div className="bg-white flex flex-wrap justify-center gap-3 rounded-full px-6 py-3 shadow-2xl">
          {colorList.map((color, index) => 
          <button key={index}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{ backgroundColor: color.type }}
          onClick={() => setColor(color.type)}
        >
         {color.type}
        </button>
          )}
            
          </div>
         
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-5 inset-x-0 px-2">
            <input type="color" value={color} className="px-1 w-36 h-8" onChange={(e)=> setColor(e.target.value)}/>
          </div>
      </div>
    </>
  );
}
export default App;
