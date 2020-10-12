import React from "react";

import "./user-profile.styles.scss";

class UserProfile extends React.Component {


  render() {
    return (
      <div className="container">
        <h1>{this.props.name}</h1>
        <h2>{this.props.email}</h2>
        Posts :{" "}
        {this.state.posts.map(post => (
          <div className="post" key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default UserProfile;
