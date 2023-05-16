import React from "react";
import { Col, Row, Button } from "react-bootstrap"
import "./Catagory.css"



function CatagoryA() {
    return (
        <Row className="bg-W font">
            <Col sm="12" className="flex justify-content-center">
                <div>
                    <Button className="font" variant="outline-success">الكل</Button>
                    <Button className="font" variant="outline-success">فطار</Button>
                    <Button className="font" variant="outline-success">غداء</Button>
                    <Button className="font" variant="outline-success">تحلية</Button>
                    <Button className="font" variant="outline-success">مشروبات</Button>
                </div>
            </Col>
        </Row>
    );
}

export default CatagoryA;
