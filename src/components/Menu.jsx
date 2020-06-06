import React , {useState }from 'react'
import {Link} from '@reach/router'
import Logo from '../image/Logo.png'
import styled from 'styled-components'

const Colum =   styled.h6`

    @media only  screen and (max-width: 768px){
      display: none;
    }   
`;




function Menu({navLinks, background,hoverBackground,linkColor}) {
  
  const [hoverIndex, setHoverIndex] = useState(-1)
  const [navOpen, setNavOpen] = useState(false)
  
  return (
       <nav class="responsive-toolbar"
       style = {{background}}>
         <ul 
         style = {{background}}
         className={navOpen ? 'active':''}
         >
            <figure onClick={()=> setNavOpen(!navOpen)}>
              <img src={Logo} height="40px" width="40px" alt="logo-nav-toggler"></img>
              <Colum>Ngagoum Consulting</Colum>
            </figure>
           {navLinks.map((link,index) => 
            <li
              onMouseEnter={()=>setHoverIndex(index)}
              onMouseLeave={()=>setHoverIndex(-1)}
              style = {{background:hoverIndex === index? (hoverBackground || '#999'):''}}
            >
                <Link to={link.path}
                  style={{color:linkColor}}
                >
                  {link.text}
                </Link>
            </li>
           )}
         </ul>

       </nav>
    )
}

export default Menu;
