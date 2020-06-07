import React from 'react'
import {Accordion, Card,Button,Row,Col,Container,Image} from 'react-bootstrap'
import microsoft from '../image/microsoft.jpg'
import microsoft2 from '../image/microsoft2.jpg'
import microsoft3 from '../image/microsoft3.jpg'
import Calu1 from '../image/Calu1.jpeg'
import Calu2 from '../image/Calu2.jpeg'
import Analyse1 from '../image/Analyse1.jpeg'
import Coseil1 from '../image/Coseil1.jpeg'
import Coseil2 from '../image/Coseil2.jpeg'
import Coseil3 from '../image/Coseil3.jpeg'
import styled from 'styled-components'

const Colum =   styled.div`
    

    @media  screen and (min-width: 768px){
        display:block;

    }   
`;

const Service = () => {

    return (
        <div className="container">
            <h1>Service</h1>

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-success" eventKey="1">
                            Formation Microsoft
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>

                        
                        <Container>
                                <Row>
                                <Col xs={6} md={4}>
                                     
                                     <Image src={microsoft} rounded />
                                     
                                </Col>
                                <Col xs={6} md={4}>
                                     <Image src={microsoft2} thumbnail />
                                </Col>
                                <Col xs={6} md={4}>
                                     <Image src={microsoft3} thumbnail />
                                </Col>
                                </Row>
                                <Row>
                                    Description detaillée
                                </Row>
                         </Container>
                        
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-primary" eventKey="0">
                            Comptabilité
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                
                            <Container>
                                <Row>
                                <Col xs={6} md={4}>
                                     <Image src={Calu1} rounded />
                                </Col>
                                <Col xs={6} md={4}>
                                     <Image src={Calu2} thumbnail />
                                </Col>
                                <Col xs={6} md={4}>
                                     <Image src={Analyse1} thumbnail />
                                </Col>
                                </Row>
                                <Row>
                                    Description detaillée
                                </Row>
                         </Container>
                                
                                
                                
                            
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card> 
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="outline-info" eventKey="2">
                            Conseil
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>
                        <Container>
                                <Row>
                                <Col xs={6} md={4}>
                                     <Image src={Coseil1} rounded />
                                </Col>
                                <Col xs={6} md={4}>
                                     <Image src={Coseil2} thumbnail />
                                </Col>
                                <Col xs={6} md={4}>
                                     <Image src={Coseil3} thumbnail />
                                </Col>
                                </Row>
                                <Row>
                                    Description detaillée
                                </Row>
                         </Container>
                            
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                                
        </div>
    )
}

export default Service;