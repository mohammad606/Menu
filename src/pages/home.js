import React, { useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap"
import "./home.css"
import { motion } from "framer-motion"
import HeadarA from '../components/Headar';
import About from "../components/about";
import { set, ref } from "firebase/database"
import { data } from '../firebase/dataFire';
import Basket from "../components/basket";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import NavbarA from "../components/NavbarA"
import Cards from "../components/cards";
import Fetch from "../firebase/fetchData"

function Home({ name, ...props }) {
    // ----------------------------------------------------------------------------------------start get data
    const [foodList, setContact] = useState([])
    Fetch("food",setContact)
    // ---------------------------------------------------------------------------------------start get data    


    //-------------------------------------------------------------------------------- start catagory filtet

    const [filter, setfilter] = useState('All')


    let filtervalue = foodList.filter((e) => {

        if (filter === "mycosis") {
            return e.catagory === "mycosis"
        } else if (filter === "lunch") {
            return e.catagory === "lunch"
        } else if (filter === "desalination") {
            return e.catagory === "desalination"
        } else if (filter === "drinks") {
            return e.catagory === "drinks"
        } else {
            return e
        }

    })

    const getDataCatagory = (e) => {
        setfilter(e.target.value)
    }
    //---------------------------------------------------------------------------------- end catagory filtet

    // ----------------------------------------------------------------------start get catagory from backend
    const addCatagory = foodList.reduce((catag, current) => {
        let obj = catag.find((item) => item.catagory === current.catagory)
        if (obj) {
            return catag
        }
        return catag.concat([current])
    }, [])
    // ----------------------------------------------------------------------end get catagory from backend


    //----------------------------------------------------------------------------------- start search input
    const [search, setSearch] = useState('')
    const handleSubmit = (e) => e.preventDefault()
    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }
    //------------------------------------------------------------------------------------- end search input

    //----------------------------------------------------------------------------start send data basket user    
    const [qtnItem, setQtnItem] = useState([]);
    const [nameItemBasket, setNameItemBasket] = useState([]);
    const [priceItems, setPriceItem] = useState([]);
    const [userItem, setUserItem] = useState([]);
    const [allPriceItem, setAllPreice] = useState([]);
    const handAddBasket = (prodoct, keyitem, nameItem, priceItem) => {
        setUserItem(prodoct)
        setQtnItem(keyitem)
        setNameItemBasket(nameItem)
        setPriceItem(priceItem)
        const calcPrice = qtnItem * priceItem
        setAllPreice(calcPrice)
        const idUser = localStorage.getItem('userId')
        set(ref(data, `users/Basket/${idUser}/${userItem}`), {
            id: userItem,
            qtn: qtnItem,
            name: nameItemBasket,
            price: priceItems,
            PriceAll: allPriceItem,
        })
    }
    //------------------------------------------------------------------------------end send data basket user

    //----------------------------------------------------------------------------start handel btn of basket

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //-------------------------------------------------------------------------------end handel btn of basket


    return (
        <>
            <NavbarA />
            <div className="containarHome">
                <Cards />
                <hr className="afterLine" />
                <Form className="formSearch" onSubmit={handleSubmit}>
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={handleSearchChange}
                    />
                    <Button variant="warning">Search</Button>
                </Form>
                <Button variant="primary" onClick={handleShow} className="BasketCanvas me-2">Basket
                </Button>
                <Offcanvas show={show} onHide={handleClose} {...props} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>My Order</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Basket />
                    </Offcanvas.Body>
                </Offcanvas>
                <motion.div className="contData"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>

                    <HeadarA />
                    <Row className="font ">
                        <Col sm="12" className=" justify-content-center">
                            <div className="catBtn">
                                <Button className="font" onClick={getDataCatagory} value={"All"} variant="warning">All</Button>
                                {addCatagory.map((e) => {
                                    return (<Button className="font" onClick={getDataCatagory} value={e.catagory} variant="warning">{e.catagory}</Button>)
                                })}
                            </div>
                        </Col>
                    </Row>
                    <Row className="contCard mt-5">
                        {filtervalue.filter(nFood => nFood.name.includes(search)).map((e) => {
                            return (<>
                                <motion.div key={e.id} sm={12} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className='contCol mb-3'>
                                    <div className='contImg'>
                                        <img className='img' src={e.img} alt="fdh" />
                                    </div>
                                    <div className='contTitle'>
                                        <h3 className="text-end">{e.name}</h3>
                                        <span> {e.titel}</span>
                                        <p className='price'>السعر : {e.price}</p>
                                        <DropdownButton
                                            align="end"
                                            title="أضف الى السلة"
                                            id="dropdown-menu-align-end"
                                            className="basketBtn"
                                        >
                                            <button onClick={(f) => handAddBasket(e.key, f.target.value, e.name, e.price)} value='1' >1</button>
                                            <button onClick={(f) => handAddBasket(e.key, f.target.value, e.name, e.price)} value='2' >2</button>
                                            <button onClick={(f) => handAddBasket(e.key, f.target.value, e.name, e.price)} value='3' >3</button>
                                            <button onClick={(f) => handAddBasket(e.key, f.target.value, e.name, e.price)} value='4' >4</button>
                                            <button onClick={(f) => handAddBasket(e.key, f.target.value, e.name, e.price)} value='5' >5</button>
                                            <button onClick={(f) => handAddBasket(e.key, f.target.value, e.name, e.price)} value='6' >6</button>
                                            <button onClick={(f) => handAddBasket(e.key, f.target.value, e.name, e.price)} value='7' >7</button>
                                            <button onClick={(f) => handAddBasket(e.key, f.target.value, e.name, e.price)} value='8' >8</button>
                                            <button onClick={(f) => handAddBasket(e.key, f.target.value, e.name, e.price)} value='9' >9</button>
                                            <button onClick={(f) => handAddBasket(e.key, f.target.value, e.name, e.price)} value='10'>10</button>

                                            <Dropdown.Divider />
                                        </DropdownButton>

                                    </div>
                                </motion.div>
                            </>)
                        })}
                    </Row>
                </motion.div>
                <About />
            </div></>
    );
}

export default Home;
