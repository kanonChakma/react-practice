import React, { useState, useEffect } from "react";
function Showdata() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2>user length is:{users.length}</h2>
      {users.map((value) => (
        <li>name is:{value.name}</li>
      ))}
    </div>
  );
}
export default Showdata;
