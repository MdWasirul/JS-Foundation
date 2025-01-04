import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  function changeColor(color) {
    setColor(color);
  }
  return (
    // <>
    //   <h1 className="bg-green-500 text-3xl">A bg changer with vite</h1>
    // </>
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button
            onClick={() => changeColor("red")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          >
            Red
          </button>
          <button
            onClick={() => changeColor("green")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
