import React from "react";
import styled from "styled-components";

import "./App.css";
import { Card } from "./components/card/card.component";

const Text = styled.div`
  color: red;
  font-size: 24px;
  border: ${({ isActive }) =>
    isActive ? "1px solid black" : "3px dotted green"};
`;

const textStyles = {
  color: "red",
  fontSize: "24px"
};

function App() {
  return (
    <div className="App">
      <Card>
        <div style={textStyles}> I am a component</div>
        <Text isActive={false}>
          I am a div component in the styled with in the name 'Text'
        </Text>
      </Card>
    </div>
  );
}

export default App;
