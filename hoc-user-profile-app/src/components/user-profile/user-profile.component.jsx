import React from "react";

import "./user-profile.styles.scss";
import withData from "../../with-data";

const UserProfile = ({ data, name, email }) => (
  <div className="container user-list">
    <h1>{name}</h1>
    <h4>{email}</h4>
    Posts:
    {data.map(post => (
      <div className="post" key={post.id}>
        <h5>{post.title}</h5>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
);

export default withData(UserProfile); //changeID-111 :  ,"https://jsonplaceholder.typicode.com/posts"
