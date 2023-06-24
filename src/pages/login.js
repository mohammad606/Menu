import React, { useEffect } from "react";
import "./login-combletprofile.css"
import { useState } from "react";
import { auth, data, provider } from "../firebase/dataFire"
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import {  ref, onValue } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import NavbarA from "../components/NavbarA"



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
    const [userDataId, setUserDataId] = useState([])
    useEffect((e) => {
        onValue(ref(data, 'users/'), (snapshot) => {
            const db = snapshot.val();
            let arrayUsers = Object.keys(db);
            setUserDataId(arrayUsers)
        });
    }, [])
    console.log(userDataId)

    const handlesingin = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                localStorage.setItem('emailGoogle', data.user.email)
                window.history.forward()

                let userId = localStorage.getItem('userId')
                console.log(userId)
                setTimeout(() => {
                    if (userDataId.includes(userId)) {
                        return nav('/')
                    } else {
                        return nav("/competeprofileUser")
                    }
                }, 1000);
            })

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                window.localStorage.setItem('userId', user.uid)
            }
        });
    }, [])

    // --------------------------------------------------------end log in with google
    return (<>
        <NavbarA />
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
                        <img className="google-icon" alt="/" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" /> LogIn\SignIn with google
                    </button>

                </form>
            </div>
        </div></>
    )
}
export default Login