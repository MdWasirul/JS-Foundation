import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15); //react Hook
  /* counter ki value ko setCounter function update karta hai*/
  // let counter = 15;
  const addvalue = () => {
    // if(counter>=20)return;  
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(counter => counter+1);
    setCounter(counter => counter+1);
    setCounter(counter => counter+1);

    // console.log("clicked", counter);

    // counter = counter + 1;
    // setCounter(counter);// 10,11,12,13......
    // console.log("clicked", Math.random());
    // console.log("add value", Math.random());
  };

  const removeValue = () => {
    // if (counter < 1) return;

    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai or React</h1>
      <h2>counter value:{counter}</h2>

      <button onClick={addvalue}>add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer {counter}</p>
    </>
  );
}

export default App;
