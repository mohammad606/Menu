import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./basket.css"
import { remove, ref, onValue } from "firebase/database";
import { data } from "../firebase/dataFire"
import Swal from 'sweetalert2';
import { Nav } from "react-bootstrap";
import Fetch from "../firebase/fetchData"


const Basket = () => {
    // ----------------------------------------------------------------start get data food
    const idUser = localStorage.getItem('userId')
    const [foodList, seFoodList] = useState()
    Fetch('food' , seFoodList)
    // ------------------------------------------------------------------end get data food
    // -------------------------------------------------------start get data Basket of user   
    const [idItem, setUserBasket] = useState()
    const getDataBase = () => {
        try {
            const db = ref(data, `users/Basket/${idUser}/`)
            onValue(db, (e) => {
                setUserBasket(e.val())
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getDataBase()
    }, [])


    const arrayItemid = []

    for (let key in idItem) {
        arrayItemid.push(idItem[key].id)
    }
    // ----------------------------------------------------------end get data Basket of user  


    // -----------------------------------------------start filter data food with data Basket
    const Filter = (e) => {
        const index = arrayItemid.indexOf(e.key);
        if (index !== -1) {
            return e
        }
    }
    // -----------------------------------------------end filter data food with data Basket

    //----------------------------------------------- start handle delet data from Basket user
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
                remove(ref(data, `users/Basket/${idUser}/${id}`))
            }
        })
    }

    //----------------------------------------------- -end handle delet data from Basket user

   
    return (<>
        <form>
        <Nav.Link className="btnOrder" href="/orderConfirmation">تأكيد الطلب  </Nav.Link>
            {foodList?.filter(Filter)?.map((e) => (<div className="contBasket">
                <div className='contImgBasket'>
                    <img className='imgBasket' src={e.img} alt="fdh" />
                </div>
                <div className='contTitleBasket'>
                    <h3 className="text-centar">{e.name}</h3>
                    <p className='priceBasket'>السعر : {e.price}</p>
                    <button onClick={(f) =>{ 
                        deleteData(e.key)
                        f.preventDefault()
                        }
                        } className="basketBtn">ازالة من الأوردلر</button>

                </div></div>
            ))}</form></>

    )
}
export default Basket