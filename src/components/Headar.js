import React from "react";
import { Col, Row } from "react-bootstrap"
import "./Headar.css"



function HeadarA() {
    return (
        <Row className="font">
            <Col sm="12" className="justify-content-center text-center">
                <div className="colorHedar title">
                    Big Big
                </div>
                <hr className="afterLine" />
                <div className="titleRols">
                    <h2>
                        The Real Taste of fast food
                        <br />
                        & a Unique Adventure Awaits
                    </h2>
                </div>
            </Col>
        </Row>
    );
}

export default HeadarA;
