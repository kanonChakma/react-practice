import React from "react";
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
export default Temparature;
