import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const tempInfo = [
    { place: "dhaka", temp: 34 },
    { place: "chittagong", temp: 399 },
    { place: "sylhet", temp: 37 },
    { place: "cumilla", temp: 35 }
  ];
  return (
    <div className="App">
      <Showdata></Showdata>
      <Count></Count>

      {tempInfo.map((temp) => (
        <Temparature info={temp}></Temparature>
      ))}
    </div>
  );
}
function Showdata() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>user length is:{users.length}</h2>
      {
       users.map(value=><li>{value.name}</li>)
      }
    </div>
  );
}
//------------------------------------//
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
    </div>
  );
}
////////////
function Temparature(props) {
  const { place, temp } = props.info;
  const tempStyle = {
    width: "300px",
    height: "100px",
    backgroundColor: "lightgray",
    border: "2px solid pink",
    borderRadious: "5px",
    margin: "10px"
  };
  return (
    <div style={tempStyle}>
      <h3>{place}</h3>
      <h3>{temp}</h3>
    </div>
  );
}
