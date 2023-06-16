import React, { useEffect } from "react";
import "./login-combletprofile.css"
import { useState } from "react";
import { auth, provider } from "../firebase/dataFire"
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";





let Login = () => {

    // ---------------------------------------------------------start send data for auth
    const nav = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const login = (e) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                localStorage.setItem('admin', res)
                window.history.forward()
                nav('/')
            }
            )
            .catch((error) => console.log(error))
    }
    // ---------------------------------------------------------end send data for auth
    // --------------------------------------------------------start log in with google
    const [emailGoogle, setGoogle] = useState('')


    const handlesingin = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                setGoogle(data.user.email)
                localStorage.setItem('emailGoogle', data.user.email)
                window.history.forward()
                return nav('/competeprofileuser')
            })

    }
    useEffect(() => {
        setGoogle(localStorage.getItem('emailGoogle'))

    }, [])

    // --------------------------------------------------------end log in with google
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

                    <button className="googleSing" id="aSubmit" onClick={handlesingin}>
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/> Sign in with google
                    </button>

                </form>
            </div>
        </div>
    )
}
export default Login