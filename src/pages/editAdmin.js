import React, { useState, useEffect } from 'react';
import { Button, Row } from 'react-bootstrap';
import { data  } from '../firebase/dataFire';
import { uid } from 'uid';
import "./editAdmin.css"
import { set, ref, remove } from "firebase/database"
import Swal from 'sweetalert2';
import { motion } from "framer-motion"
import NavbarA from "../components/NavbarA"
import Fetch from "../firebase/fetchData"





function EditD() {
    //-------------------------------------------------------- start send new data
    const [name, setName] = useState("")
    const [titel, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [catagory, setCatagory] = useState("")
    const [img, setImg] = useState("")

    const writ = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't Add Items",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                const uuid = uid()
                set(ref(data, `food/${uuid}`), {
                    name: name,
                    titel: titel,
                    price: price,
                    catagory: catagory,
                    img: img
                })

            }

        })


    }
    //---------------------------------------------------------- end send new data




    // 'file' comes from the Blob or File API

    //-------------------------------------------------------- start get data
    const [coontact, setContact] = useState([])
    Fetch("food",setContact)
    //-------------------------------------------------------- end get data

    //-------------------------------------------------------- start delete data
    const deleteData = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                remove(ref(data, `food/${id}`))
            }
        })
    }

    //-------------------------------------------------------- end delete data


    return (
        <>
            <NavbarA />
            <div className='contEdit'>
                {/* -----------------------------------------------------------------------------------------------------start input data */}
                <form className="formData mt-4 p-2" >

                    <label htmlFor="name" className='labData'>Item name</label>
                    <input type="text" id="name" className='inpData' placeholder='Item Name ...' onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="price" className='labData'>Item price</label>
                    <input type="number" id="price" className='inpData' placeholder='Item Price ...' onChange={(e) => setPrice(e.target.value)} />

                    <label htmlFor="titel" className='labData'>Item Titel</label>
                    <input type="text" id="titel" className='inpData' placeholder='Item Title ...' onChange={(e) => setTitle(e.target.value)} />

                    <label htmlFor="catagory" className='labData'>Item Catagory</label>
                    <select id='catagory' className='w-75 ' onChange={(e) => setCatagory(e.target.value)} placeholder='Add Catagory ...'>
                        <option value="Lunch" >Lunch</option>
                        <option value="Mycosis" >Mycosis</option>
                        <option value="Drinks" >Drinks</option>
                        <option value="Sweet" >Sweet</option>
                    </select>


                    <label htmlFor="img" className='labData'>item image</label>
                    <input type="url" id="img" className='inpData' placeholder='Item Img Url ...' onChange={(e) => setImg(e.target.value)} />

                    <Button onClick={writ} variant="primary">save</Button>

                </form>
                {/* ----------------------------------------------------------------------------------------------------------------end input data */}
                {/* -------------------------------------------------------------------------------------------------------start show data to admin*/}
                <div>

                    {coontact.map((e) => {
                        return (
                            <Row>
                                <motion.div key={e.id} sm={12} className='Col mb-3' initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
                                    <div className='contenarImg'>
                                        <img className='imgCard' src={e.img} alt="fdh" />
                                    </div>
                                    <div className='contenartitel'>
                                        <h3>{e.name}</h3>
                                        <soan> {e.titel}</soan>
                                        <p className='price-S '>السعر : {e.price}</p>
                                        <Button onClick={() => deleteData(e.key)} variant="danger">Delet</Button>
                                    </div>
                                </motion.div>
                            </Row>

                        )
                    })}

                </div>
                {/* -------------------------------------------------------------------------------------------------------end show data to admin*/}
            </div ></>

    )
}
export default EditD


