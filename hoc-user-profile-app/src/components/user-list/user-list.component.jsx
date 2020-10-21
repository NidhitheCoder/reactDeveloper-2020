import React from "react";
import withData from "../../with-data";

const UserList = ({ data }) => (
  <div className="container user-list">
    <h1>Users List</h1>
    {console.log(data)}
    {data.map(user => (
      <div className="post" key={user.id}>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
    ))}
  </div>
);

export default withData(UserList); //changeID-111: , "https://jsonplaceholder.typicode.com/users"
