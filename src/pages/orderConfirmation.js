import React, { useState, useEffect } from "react";
import { data } from "../firebase/dataFire"
import { ref, onValue } from "firebase/database";
import "./orderConfirmation.css"



const Confirmation = () => {
// --------------------------------------------------------------------start get data basket user

    const idUser = localStorage.getItem('userId')
    const [basketOrder, seFoodList] = useState()
    const getFoodList = () => {
        try {
            const db = ref(data, `users/Basket/${idUser}`)
            onValue(db, (e) => {
                const dataFood = { ...e.val() }
                const foodListData = []
                for (const key in dataFood) {
                    foodListData.push({
                        key: key,
                        qtn: dataFood[key].qtn,
                        name: dataFood[key].name,
                        price: dataFood[key].price,
                        PriceAll: dataFood[key].PriceAll,
                    })
                    seFoodList(foodListData)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getFoodList()
    }, [])

// --------------------------------------------------------------------end get data basket user
// ---------------------------------------------------------------------start calc all price basket  
    const arrayPriceAll = []
    let PriceAll = 0
    const handelPriceAll = () => {
        basketOrder?.map((e) => {
            return arrayPriceAll.push(e.PriceAll)
        })
        for (let i = 0; i < arrayPriceAll.length; i++) {
            PriceAll = PriceAll + arrayPriceAll[i]
        }

    }
    handelPriceAll()
// ---------------------------------------------------------------------start calc all price basket 

    // ----------------------------------------------------------------------------------------
    return (<>
        <table className="orderTitle">
            <thead>
                <tr>
                    <td>Item</td>
                    <td>Price</td>
                    <td>Qtn</td>
                    <td>Title</td>
                </tr>
            </thead>
            {basketOrder?.map((e) => (
                <tbody>
                    <tr>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td>{e.qtn}</td>
                        <td>{e.PriceAll}</td>
                    </tr>
                </tbody>
            ))}
            <tfoot>
                <tr>
                    <td colSpan={1}>All :</td>
                    <td colSpan={2}> </td>
                    <td colSpan={1}> {PriceAll}</td>
                </tr>
            </tfoot>
        </table>



    </>
    )


}
export default Confirmation
