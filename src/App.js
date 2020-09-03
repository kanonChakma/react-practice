import React from "react";
import "./styles.css";
import Showdata from "./Component/Showdata/Showdata";
import Count from "./Component/Count/Count";
import Temparature from "./Component/Temparature/Temparature";

export default function App() {
  const tempInfo = [
    { place: "dhaka", temp: 34, id: 1 },
    { place: "chittagong", temp: 399, id: 2 },
    { place: "sylhet", temp: 37, id: 3 },
    { place: "cumilla", temp: 35, id: 4 }
  ];
  return (
    <div className="App">
      <Showdata></Showdata>
      <Count></Count>
      {tempInfo.map((temp) => (
        <Temparature info={temp} key={temp.id}></Temparature>
      ))}
    </div>
  );
}
