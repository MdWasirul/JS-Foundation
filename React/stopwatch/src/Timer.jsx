import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    //mounted

    console.log("Adding new intervals");

    const timer = setInterval(() => setTime(time + 1), 1000);
    return function () {
      console.log("Clear old interval");
      clearInterval(timer);
    };
  }, [time]);
  const handleClick = () => {
    setTime(0);
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Current Time is {time}</p>
      <button onClick={handleClick}>Stop</button>
    </div>
  );
};

export default Timer;
