import React from "react";
import NavbarA from "./components/NavbarA"
import Home from "./pages/home"
import EditD from "./pages/editAdmin"
import Login from "./pages/login"
import { BrowserRouter, Routes, Route } from "react-router-dom"




function App() {

  //------------------------------------------------------------ start filter access users
  const access = () => {
    if (localStorage.getItem('admin') == undefined) {
      return (
        <>
          <Route exect path="/" Component={Home} />
          <Route path="/login" Component={Login} />
        </>
      )
    } else {
      return (
        <>
          <Route exect path="/" Component={Home} />
          <Route path="/editAdmin" Component={EditD} />
        </>
      )
    }}
  //------------------------------------------------------------ start filter access users

  return (
    <div>
      <BrowserRouter>
        <NavbarA />
        <Routes >
          {access()}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
