import React from 'react'
import styled from 'styled-components'

const Titlle = styled.div `
    font-size:1.5em;
    text-algin:center;
    width:100%;
    height: 500%;
    left:78px;
    botton:0;
    position:fixed;
    background: #333;
       
`;

const Section = () => {

    return (
        <Titlle>
            <h1>Section</h1>
        </Titlle>
    )
}

export default Section;