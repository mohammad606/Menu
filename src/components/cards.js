import React from "react";
import { Carousel } from "react-bootstrap";
import "./card.css"
const Cards = () => {


    return (
        <Carousel >
            <Carousel.Item className="contCardImg">
                <img
                    className="d-block w-100"
                    src="https://dc583.4shared.com/img/bvmdnA-Cku/s23/188edbbc188/8433421"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="contCardImg">
                <img
                    className="d-block w-100"
                    src="https://dc552.4shared.com/img/ZKZA3xu3fa/s23/188edbd7708/8433396"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className="contCardImg">
                <img
                    className="d-block w-100"
                    src="https://dc552.4shared.com/img/HZWT1g5Mge/s23/188edc0f978/767283"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
export default Cards