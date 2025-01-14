import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComp from "./MyComp";

function App() {
  const [isVisible, setisVisible] = useState(true);

  useEffect(() => {
    console.log("App is mounting....");
  }, []);

  return (
    <div className="App">
      {isVisible ? <MyComp /> : <></>}
      <button onClick={() => setisVisible(!isVisible)}>Toggle</button>
    </div>
  );
}

export default App;
