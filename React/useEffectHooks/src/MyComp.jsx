import React, { useEffect, useState } from "react";

const MyComp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("My app Comp. is Mounting...."); //mount

    return function () {
      console.log("Unmounting.........."); //unmount
    };
  }, []);

  useEffect(() => {
    //update
    console.log("count got updationg", count);
    return function () {
      console.log("Returning count", count);
    };
  }, [count]);

  return (
    <>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </>
  );
};

export default MyComp;
