import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/home"
import EditD from "../pages/editAdmin"
import Login from "../pages/login"
import CompeteProfileUser from "../pages/competeprofileuser"
import ProfileUser from "../pages/profileuser"
import Basket from "../components/basket"
import Confirmation from "../pages/orderConfirmation";




const AccessUsers = () => {
  if (localStorage.getItem('admin') == null && localStorage.getItem('emailGoogle') == null) {
    return (
      <Routes>
        <Route exect path="/" Component={Home} />
        <Route path="/login" Component={Login} />
      </Routes>
    )
  } else if (localStorage.getItem('admin') != null) {
    return (
      <Routes>
        <Route exect path="/" Component={Home} />
        <Route path="/editAdmin" Component={EditD} />
      </Routes>
    )
  } else if (localStorage.getItem('emailGoogle') != null) {
    return (
      <Routes>
        <Route exect path="/" element={<Home/>} />
        <Route path="/profileuser" Component={ProfileUser} />
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/orderConfirmation" Component={Confirmation}/>
        <Route path="/competeprofileuser" element={<CompeteProfileUser/>} />
      </Routes>
    )
  }
}

export default AccessUsers