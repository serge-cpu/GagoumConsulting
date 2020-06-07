import React from 'react'
import styled from 'styled-components'
import Coseil1 from '../image/Coseil1.jpeg'
import Coseil2 from '../image/Coseil2.jpeg'
import Coseil3 from '../image/Coseil3.jpeg'


const Colum =   styled.div`
     width:100%;
   
`;

function Conseil (props){

    return (
          
                <Colum>

                    <h1>Formation</h1>
                    <img src={Coseil1} height="40px" width="40px" alt="logo-nav-toggler"></img>
                    <img src={Coseil2} height="40px" width="40px" alt="logo-nav-toggler"></img>
                    <img src={Coseil3} height="40px" width="40px" alt="logo-nav-toggler"></img>

                </Colum>

        
        
    )
}

export default Conseil;