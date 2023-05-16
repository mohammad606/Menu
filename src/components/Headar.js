import React from "react";
import { Col, Row } from "react-bootstrap"
import "./Headar.css"



function HeadarA() {
    return (
        <Row className="bg-W font">
            <Col sm="12" className="justify-content-center text-center">
                <div className="colorG title">
                    قائمة الطعام
                </div>
                <hr className="afterLine"/>
            </Col>
        </Row>
    );
}

export default HeadarA;
