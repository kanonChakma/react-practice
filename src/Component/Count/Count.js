import React, { useState } from "react";
import Another from "../Another/Another";
function Count() {
  const [count, setCount] = useState(0);
  /*const inCount=()=>{
       const newCount=count+1;
       setCount(newCount);
  }*/
  const inCount = () => setCount(count + 1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={inCount}>increased</button>
      <button onClick={() => setCount(count - 1)}>decreased</button>
      <Another countBro={count}></Another>
      <Another countBro={count}></Another>
      <Another countBro={count}></Another>
    </div>
  );
}
export default Count;
