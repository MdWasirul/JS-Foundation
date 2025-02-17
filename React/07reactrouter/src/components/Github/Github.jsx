import React, { useEffect, useState } from "react";

function Github() {
    const [data,setData]=useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data)
      });
  }, []);

  return (
    <div
      className="text-center m-4 bg-gray-400 text-white 
    p-4 text-3xl"
    >
      Github Followers:{data.followers}
      <img className='text-center'src={data.avatar_url} alt="Git_Picture" width={300} />
    </div>
  );
}

export default Github;
