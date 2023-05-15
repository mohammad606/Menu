import React from "react";
import {Container} from "react-bootstrap"
import NavbarA from "./components/NavbarA"
import HeadarA from "./components/Headar"
import CatagoryA from "./components/Catagory"
import CardsA from "./components/Cards"

function App() {
  return (
    <div className="color-body font">
      <NavbarA />
      <Container>
        <HeadarA/>
        <CatagoryA/>
        <CardsA/>
      </Container>
    </div>
  );
}

export default App;
