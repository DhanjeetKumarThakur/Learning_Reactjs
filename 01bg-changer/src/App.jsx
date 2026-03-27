import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="h-screen" style={{ backgroundColor: color }}>
        <div className="mx-auto flex items-center max-w-sm">
          <div className="bg-red-500 px-2 rounded-full mt-10">
            <button className="text-white" onClick={() => setColor("red")}>
              red
            </button>
          </div>
          <div className="bg-green-500 px-2 rounded-full mt-10">
            <button className="text-white" onClick={() => setColor("Green")}>
              Green
            </button>
          </div>
          <div className="bg-blue-500 px-2 rounded-full mt-10">
            <button className="text-white" onClick={() => setColor("Blue")}>
              Blue
            </button>
          </div>
          <div className="bg-purple-500 px-2 rounded-full mt-10">
            <button className="text-white" onClick={() => setColor("Purple")}>
              Purple
            </button>
          </div>
          <div className="bg-orange-500 px-2 rounded-full mt-10">
            <button className="text-white" onClick={() => setColor("Orange")}>
              Orange
            </button>
          </div>
          <div className="bg-gray-500 px-2 rounded-full mt-10">
            <button className="text-white" onClick={() => setColor("Gray")}>
              Gray
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
