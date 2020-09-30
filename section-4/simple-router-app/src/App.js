import React from "react";
import { Route, Link } from "react-router-dom";

const HomePage = props => {
  console.log(props);
  return (
    <div>
      <Link to="/topics">Topics</Link>
      <button onClick={() => props.history.push("/topics")}>Topics</button>
      <h1>Home Page</h1>
    </div>
  );
};

const TopicList = props => {
  console.log(props);
  return (
    <div>
      <Link to={`${props.match.url}/13`}>To Topic 13</Link>
      <Link to={`${props.match.url}/14`}>To Topic 14</Link>
      <Link to={`${props.match.url}/15`}>To Topic 15</Link>
      <h1>Topic List</h1>
    </div>
  );
};

const TopicDetails = props => {
  console.log(props);
  return (
    <div>
      <h1>Topic Details Page : {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/topics" component={TopicList} />
      <Route path="/topics/:topicId" component={TopicDetails} />
    </div>
  );
}

export default App;
