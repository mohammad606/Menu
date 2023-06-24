import React, { useState } from "react";
import "./login-combletprofile.css"
import { data } from "../firebase/dataFire"
import { set, ref } from "firebase/database"

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";




let CompeteProfileUser = () => {
    // ------------------------------------------------------start send data for database
    const [userName, srtUserName] = useState('')
    const [phonUser, setPhonUser] = useState("")
    const [cityUser, setCityUser] = useState("")
    const [street, setStreetUser] = useState("")
    const [build, setBuild] = useState("")



    const nav = useNavigate()
    const writ = (e) => {
        e.preventDefault()
        if (!userName || !phonUser || !cityUser || !street || !build) {
            alert('Plaese provide value in each input field')
        } else {
            const uuid = localStorage.getItem('userId')
            set(ref(data, `users/${uuid}`), {
                uuid,
                userName: userName,
                phonUser: phonUser,
                cityUser: cityUser,
                street: street,
                build: build
            })

            window.localStorage.setItem('userName', userName)
            nav('/')
        }
    }


    // --------------------------------------------------------end send data for database
    return (
        <div className="logBody">
            <img src="https://i.postimg.cc/brKZX01n/1306497.jpg" alt="" />
            <div className="loginBox completProfileBox">
                <h2>Complete Your Profile</h2>
                <form>
                    <div className="userBox">
                        <input type="text" name="" required onChange={(e) => { srtUserName(e.target.value) }} />
                        <label htmlFor="">Full Name</label>
                    </div>
                    <div className="userBox">
                        <input type="nambur" name="" required onChange={(e) => { setPhonUser(e.target.value) }} />
                        <label htmlFor="">Phone Nambur</label>
                    </div>
                    <div className="userBox">
                        <input type="text" name="" required onChange={(e) => { setCityUser(e.target.value) }} />
                        <label htmlFor="">City</label>
                    </div>
                    <div className="userBox">
                        <input type="text" name="" required onChange={(e) => { setStreetUser(e.target.value) }} />
                        <label htmlFor="">street</label>
                    </div>
                    <div className="userBox">
                        <input type="text" name="" required onChange={(e) => { setBuild(e.target.value) }} />
                        <label htmlFor="">Landmark\build number</label>
                    </div>

                    <Button onClick={writ} className="btn" id="aSubmit" >
                        Submit
                    </Button>

                </form>
            </div>
        </div>
    )
}
export default CompeteProfileUser
