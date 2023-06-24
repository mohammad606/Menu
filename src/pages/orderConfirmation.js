import React, { useState } from "react";
import "./orderConfirmation.css"
import NavbarA from "../components/NavbarA"
import { uid } from "uid";
import { Button } from "react-bootstrap";
import Fetch from "../firebase/fetchData"

const Confirmation = () => {
// --------------------------------------------------------------------start get data basket user

    const idUser = localStorage.getItem('userId')
    const [basketOrder, seFoodList] = useState()
    Fetch(`users/Basket/${idUser}` , seFoodList)

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
// --------------------------------------------------------------------sart create namber for order
    let invoiceNum = parseFloat(uid()) 
// ---------------------------------------------------------------------end create namber for order

    return (<div className="d-flex flex-column position-relative">
          <NavbarA />
        <table className="orderTitle">
            <caption>invoice number : {invoiceNum}</caption>
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

        <Button className="PaymentConfirmationBtn position-absolute " variant="success">Payment ConfirmationBtn</Button>

    </div>
    )


}
export default Confirmation
