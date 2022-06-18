import React,{ useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

function Header() {
    const [toggle,setToggle] = useState(false);
    useEffect(() => {
        document.querySelector('.nav_container').style.backgroundColor = toggle ? 'white' : 'transparent';
        document.querySelector('.nav_container').style.boxShadow = toggle ? '2px 5px 10px rgba(255,255,255,0.5)' : 'none';
    }, [toggle])

   

    const Links = styled(Link)`
        
        position: relative;
        :hover{
            color: ${toggle ?  'black'  : 'white'};
        }
        :hover::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 3px;
            border-radius: 50px;
            transform: scaleX(0);
            transform-origin: bottom left;
            background: ${toggle ?  'black'  : 'white'};
            left: 0;
            bottom: -5px;
            animation: changeWidth 1s linear;
        }

        @keyframes changeWidth {
            0%{
                transform: scaleX(0);
            }50%{
                transform-origin: bottom left;
                transform: scaleX(1);
            }51%{
                transform-origin: bottom right;
            }100%{
                transform-origin: bottom right;
                transform: scaleX(0);
            }

        }

    `;


    const backgroundChange = () =>{
      if(window.scrollY >= 62){
        setToggle(true)
      }else{
        setToggle(false)
      }
    }
    window.addEventListener('scroll',backgroundChange);
  return (
    <HeaderContainer className="nav_container">
            <HeaderNav>
                <Links className="nav_links" to="/">Home</Links>
                <Links className="nav_links" to="/projects">Projects</Links>
                <Links className="nav_links" to="/about">About</Links>
                <Links className="nav_links" to="/contact">Contact</Links>
            </HeaderNav>
        
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
    position: sticky;
    top: 0;
    height: 62px;
    margin-bottom: 62px;
    display: flex;
    justify-content: center;
    z-index: 1000;
    box-shadow: none;
    transition: background-color 500ms;
`;

const HeaderNav = styled.nav`
    width: 100%;
    max-width: 300px;
    display: flex;
    margin: 20px auto;
    justify-content: space-between;
 
`;
