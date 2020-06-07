import React from 'react'
import styled from 'styled-components'
import Calu1 from '../image/Calu1.jpeg'
import Calu2 from '../image/Calu2.jpeg'
import Analyse1 from '../image/Analyse1.jpeg'

const Titlle = styled.div `
   background:black;
   width:80%;
   
`;

const Comptabilite = () => {

    return (
        <Titlle>
            <h1>Formation</h1>
            <img src={Calu1} height="40px" width="40px" alt="logo-nav-toggler"></img>
            <img src={Calu2} height="40px" width="40px" alt="logo-nav-toggler"></img>
            <img src={Analyse1} height="40px" width="40px" alt="logo-nav-toggler"></img>
        </Titlle>
    )
}

export default Comptabilite;