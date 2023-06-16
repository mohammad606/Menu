import React from "react";
import NavbarA from "./components/NavbarA"
import { BrowserRouter } from "react-router-dom"
import AccessUsers from './components/accessUsers'


function App() {


  return (
    <BrowserRouter>

      <NavbarA />
      <AccessUsers />

    </BrowserRouter>
  );
}

export default App;
