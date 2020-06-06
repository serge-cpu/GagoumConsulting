import React from 'react'
import styled from 'styled-components'

const Title = styled.h1 `
    font-size:1.5em;
    text-algin:center;
    
`;

const Wrapper = styled.div`
    font-weight:bold; 
    color:palevioletred;
    font-size:1.5em;
    width:90%;
    left:78px;
    botton:0;
    position:relative;
    
`;

const Accueil = () => {

    return (
                        <Wrapper>
                            <Title>
                                Accueil
                            </Title>
                        </Wrapper>                        
    )
}

export default Accueil;