import React from "react";
import {Container} from "react-bootstrap"
import NavbarA from "./components/NavbarA"

import HeadarA from "./components/Headar"


function App() {
  return (
    <div className="color-body font">
      <NavbarA />
      <Container>
        <HeadarA/>
      </Container>
    </div>
  );
}

export default App;
