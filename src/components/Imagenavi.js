import React from 'react'
import {Jumbotron, Container, Carousel} from 'react-bootstrap'
import styled from 'styled-components'
import Comptable from '../image/Comptable.jpg'
import microsoft from '../image/microsoft.jpg'
import sarri from '../image/sarri.jpg'

const styles = styled.div`
    .jumbo{
        
        background-size: cover;
        height:200px;
        position:relative;
        z-index:-2;    
    }
    .overlay{
        background-color:#000;
        opacity:0.6;
        top:0;
        left:0;
        botton:0;
        right:0;
        z-index:-1;      
    }
`;

const Imagenavi = () => (
    <styles>
        <Jumbotron fuild className="jumbo">
            <div className="overlay">
                <Container>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Comptable}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={microsoft}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={sarri}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                </Container>
            </div>
        </Jumbotron>
    </styles>
)

export default Imagenavi;