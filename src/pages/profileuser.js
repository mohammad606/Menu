import React from "react";
import { Button, Container, Form } from "react-bootstrap";

import 'firebase/compat/database'
import "./profileuser.css"
import { useState } from "react";
import { useEffect } from "react";


import { data } from '../firebase/dataFire';
import { ref, update } from "firebase/database";

const ProfileUser = () => {
    // ----------------------------------------------------------------------start get data of user
    const [dataUser, setcoontactData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const idUser = localStorage.getItem('userId')
            const res = await fetch(`https://food-list-bdb10-default-rtdb.firebaseio.com/users.json`);
            const dat = await res.json();
            const ObjData = { ...dat };
            const coontactData = []
            if (ObjData) {
                coontactData.push({
                    userName: ObjData[idUser].userName,
                    emaluser: ObjData[idUser].emaluser,
                    phonUser: ObjData[idUser].phonUser,
                    cityUser: ObjData[idUser].cityUser,
                    street: ObjData[idUser].street,
                    build: ObjData[idUser].build
                })
            }
            setcoontactData(coontactData)
        }
        fetchData()
    }, [])
    // ------------------------------------------------------------------------end get data of user



    // // ---------------------------------------------------------- start hundle edite data of user
    const idUser = localStorage.getItem('userId')
    const [phoneIn, setPhoneIn] = useState("")
    const [cityIn, setCityIn] = useState("")
    const [streetIn, setStreetIn] = useState("")
    const [buildIn, setBuildIn] = useState("")
    const input = document.querySelectorAll('.editData input')


    function write(b) {
        if (b === phoneIn) {
            if (!phoneIn) {
                alert('Plaese provide value in each input field')
            } else {
                update(ref(data, `users/${idUser}`), {
                    phonUser: phoneIn,

                })
                    .then(() => {
                        alert('Profile Update Successfully')
                    })
                input.forEach((e) => {
                    e.setAttribute('readOnly', 'readOnly')
                })
            }
        } else if (b === cityIn) {
            if (!phoneIn) {
                alert('Plaese provide value in each input field')
            } else {
                update(ref(data, `users/${idUser}`), {
                    cityUser: cityIn,

                })
                    .then(() => {
                        alert('Profile Update Successfully')
                    })
                input.forEach((e) => {
                    e.setAttribute('readOnly', 'readOnly')
                })
            }
        } else if (b === streetIn) {
            if (!phoneIn) {
                alert('Plaese provide value in each input field')
            } else {
                update(ref(data, `users/${idUser}`), {
                    street: streetIn,


                })
                    .then(() => {
                        alert('Profile Update Successfully')
                    })
                input.forEach((e) => {
                    e.setAttribute('readOnly', 'readOnly')
                })
            }
        } else if (b === buildIn) {
            if (!phoneIn) {
                alert('Plaese provide value in each input field')
            } else {
                update(ref(data, `users/${idUser}`), {
                    build: buildIn

                })
                    .then(() => {
                        alert('Profile Update Successfully')
                    })
                input.forEach((e) => {
                    e.setAttribute('readOnly', 'readOnly')
                })
            }
        }
    }
    // // ---------------------------------------------------------- end hundle edite data of user
    // ----------------------------------------------start handle add and remove attribute readonly
    const [showBtn, setShowBtn] = useState(false)


    const handleEditeBtn = () => {
        input.forEach((e) => {
            e.removeAttribute('readOnly')
        })
        setShowBtn(!showBtn)
    }
    // ------------------------------------------------end handle add and remove attribute readonly


    return (
        <>
            <Container>
                <div className="contprofile">
                    {dataUser.map((e) => (
                        <div className="contDataUser">
                            <h2>My Profile</h2>
                            <div>
                                <label>Full Name</label>
                                <input value={e.userName} />
                            </div>
                            <div>
                                <label>Your Email</label>
                                <input value={localStorage.getItem('emailGoogle')} />
                            </div>

                            <div className="editData">
                                <Form>
                                    <div>
                                        <label htmlFor="phone">Phone Nambur</label>
                                        <input className="phone" onChange={(e) => setPhoneIn(e.target.value)} placeholder={e.phonUser} type="Nambur" id="phone" readOnly />
                                    </div>
                                    {showBtn && <Button onClick={() => write(phoneIn)} bsStyle="warning">Save Edit</Button>}
                                </Form>
                                <Form>
                                    <div>
                                        <label htmlFor="city">City</label>
                                        <input className="city" onChange={(e) => setCityIn(e.target.value)} placeholder={e.cityUser} type="text" id="city" readOnly />
                                    </div>

                                    {showBtn && <Button onClick={() => write(cityIn)} bsStyle="warning">Save Edit</Button>}
                                </Form>
                                <Form>
                                    <div>
                                        <label htmlFor="street">Street</label>
                                        <input className="street" onChange={(e) => setStreetIn(e.target.value)} placeholder={e.street} type="text" id="street" readOnly />
                                    </div>

                                    {showBtn && <Button onClick={() => write(streetIn)} bsStyle="warning">Save Edit</Button>}
                                </Form>
                                <Form>
                                    <div>
                                        <label htmlFor="build">Landmark\build number</label>
                                        <input className="build" onChange={(e) => setBuildIn(e.target.value)} placeholder={e.build} type="text" id="build" readOnly />
                                    </div>

                                    {showBtn && <Button onClick={() => write(buildIn)} bsStyle="warning">Save Edit</Button>}
                                </Form>

                            </div>
                            <Button onClick={handleEditeBtn} bsStyle="success">Edit My Profile</Button>
                        </div>))}

                </div >
            </Container >
        </>
    )
}
export default ProfileUser