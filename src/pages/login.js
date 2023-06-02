import React from "react";
import "./login.css"
import { useState } from "react";
import { auth } from "../firebase/dataFire"
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";



let Login = () => {
    // ---------------------------------------------------------start send data of user
    const nav = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const login = (e) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => { 
                localStorage.setItem('admin',res)
                window.history.forward()
                    nav('/')
            }
             )
            .catch((error) => console.log(error))
    }
    // ---------------------------------------------------------end send data of user
    return (
        <div className="logBody">
            <img src="https://i.postimg.cc/brKZX01n/1306497.jpg" alt="" />
            <div className=" loginBox">
                <h2>Login</h2>
                <form>
                    <div className="userBox">
                        <input type="email" name="" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="userBox">
                        <input type="password" name="" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <label htmlFor="">Password</label>
                    </div>
                    <Link className="btn" id="aSubmit" onClick={login}>
                        Submit
                    </Link>
                </form>
            </div>
        </div>
    )
}
export default Login