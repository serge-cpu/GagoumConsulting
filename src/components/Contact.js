import React from 'react'
//import {Form,Button} from 'react-bootstrap'
import styled , {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    htlm{
        height:100%;
    }
    body{
        font-family: Arial,Helvetica,sans-serif;
    
        margin:0;
        height:100%;
        color:#555;
    }

`;

/*const Globalcss = css `
    background-color:#eee;
    height:40px;
    border-radius:5px;
    border:1px solid #ddd;
    margin:10px 0 20px 0;
    padding: 20px;
    box-sizing:border-box;
`;
*/
const StyleForm = styled.form`
    width:70%;
    margin-left: auto;
    margin-right:auto;
    padding:10px;
    background-color:#fff;
    border-radius:10px;
    box-sizing:border-box;
    box-shadow:0px 0px 20px 0px rgba(0,0,0,0.2);
`;

const wrapper = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    height: 100px;
    padding: 0 20px;
    
`;

const StyleInput = styled.input`
padding: 0.1em;
margin: 1.5em;
color: ${props => props.inputColor || "palevioletred"};
background: papayawhip;
border: none;
border-radius: 3px;
`;

const StyleButon = styled.button`
/* Adapt the colors based on primary prop */
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

const StyleError = styled.div`
 color:red;
 font-weight:800;
 margin:0 0 40px 0; 
`;

function Contact () {

    return (
        <>
            <GlobalStyle />
            
            <wrapper>
                
                <StyleForm>
                    <h2>Contact</h2>   
                    <label htmlFor="name" ></label>
                    <StyleInput type="text" name="name" defaultValue="name"/>
                    <label htmlFor="email" ></label>
                    <StyleInput type="email" name="email" defaultValue="@email"/>
                    <label htmlFor="tel" ></label>
                    <StyleInput type="tel" name="téléphone" defaultValue="phone"/>
                    <StyleError>
                        <p>Nous vous contactons dès la reception de l'envoie</p>
                    </StyleError>
                    <StyleButon type = "submit" >Send</StyleButon>
                </StyleForm>
                Contacter ?????
                <p>
                    <h2>Tél: (+237) .....</h2>

                </p>
            </wrapper>
        </>
    );
}

export default Contact;