import React, { useState, useEffect } from "react";
import { Col, Row, Button, Form } from "react-bootstrap"
import "./home.css"
import { motion } from "framer-motion"
import HeadarA from '../components/Headar';
import About from "../components/about";


function CatagoryA() {
    // ----------------------------------------------------------------------------------------start get data
    const [foodList, setContact] = useState([])


    useEffect(() => {
        getDataToHome()
    }, [])
    function getDataToHome() {
        const fetchDataH = async () => {
            const res = await fetch("https://food-list-bdb10-default-rtdb.firebaseio.com/.json");
            const dat = await res.json();
            const ObjDataHome = { ...dat };
            const foodListData = []
            for (const key in ObjDataHome) {
                foodListData.push({
                    key: key,
                    name: ObjDataHome[key].name,
                    price: ObjDataHome[key].price,
                    titel: ObjDataHome[key].titel,
                    catagory: ObjDataHome[key].catagory,
                    img: ObjDataHome[key].img
                })
            }
            setContact(foodListData)

        }
        fetchDataH()

    }

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




    return (
    <div className="containarHome">
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
        <motion.div className="contData"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}>

            <HeadarA />
            <Row className="font">
                <Col sm="12" className=" justify-content-center">
                    <div className="catBtn">
                        <Button className="font" onClick={getDataCatagory} value={"All"} variant="warning">All</Button>
                        {addCatagory.map((e) => {
                            return (<Button className="font" onClick={getDataCatagory} value={e.catagory} variant="warning">{e.catagory}</Button>)
                        })}
                    </div>
                </Col>
            </Row>
            <Row className="contCard">
                {filtervalue.filter(nFood => nFood.name.includes(search)).map((e) => {
                    return (<>
                        <motion.div key={e.id} sm={12} initial={{opacity:0 , scale:0}} whileInView={{opacity:1 , scale:1}} transition={{duration:0.6}} className='contCol mb-3'>
                            <div className='contImg'>
                                <img className='img' src={e.img} alt="fdh" />
                            </div>
                            <div className='contTitle'>
                                <h3 className="text-end">{e.name}</h3>
                                <span> {e.titel}</span>
                                <p className='price'>السعر : {e.price}</p>
                            </div>
                        </motion.div>
                    </>)
                })}
            </Row>
        </motion.div>
        <About/>
    </div>
    );
}

export default CatagoryA;
