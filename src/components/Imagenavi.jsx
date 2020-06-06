import React from 'react'
import {Jumbotron, Container, Carousel} from 'react-bootstrap'
import styled from 'styled-components'
import Calu1 from '../image/Calu1.jpeg'
import Calu2 from '../image/Calu2.jpeg'
import Analyse1 from '../image/Analyse1.jpeg'


const styles = styled.div`
      .jumbo{
        background-size: cover;
        height:200px;
        position:relative;
        z-index:-2;    
      }
    
`;

const Imagenavi = () => (

               <styles>
                  <Jumbotron>
                  <Container>
                    <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block width:100px  height:250px"
                        src={Calu2}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w100 "
                        src={Calu1}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w100"
                        src={Analyse1}
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Container> 
                </Jumbotron> 
               </styles> 
)

export default Imagenavi;