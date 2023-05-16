import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./Cards.css"

function CardsA() {
    return (
        <Row>
            <Col sm="12" className='mb-3'>
                <Card className="d-flex flex-row border-0 bg-W mt-5">
                    <Card.Img variant="top" className='img-w-h' src="https://images.pexels.com/photos/916925/pexels-photo-916925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fdh" />
                    <Card.Body>
                        <Card.Title className='d-flex justify-content-between'>
                            <h3>Card title</h3> 
                            <p className='price-S '>السعر</p>
                        </Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default CardsA;