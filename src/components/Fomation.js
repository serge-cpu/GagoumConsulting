import React from 'react'
import styled from 'styled-components'
import microsoft from '../image/microsoft.jpg'
import microsoft2 from '../image/microsoft2.jpg'
import microsoft3 from '../image/microsoft3.jpg'

const Titlle = styled.div `
   background:black;
    margin-left:40px;
    margin-left:20px;
    margin-top:20px;
    margin-bottom:20px;
`;


const Formation = () => {

    return (
        <Titlle>
            <h1>Formation</h1>
            <img src={microsoft} width="270px%" height="170px" alt="logo-nav-toggler"></img>
            <img src={microsoft2} width="270px" height="170px" alt="logo-nav-toggler"></img>
            <img src={microsoft3} width="270px" height="170px" alt="logo-nav-toggler"></img>
        </Titlle>
    )
}

export default Formation;