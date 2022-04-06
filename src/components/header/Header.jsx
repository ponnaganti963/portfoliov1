import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

function Header() {
  return (
    <container>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Manikanta</h1>
            <h5 className="text_light">MERN Stack Developer</h5>
            <HeaderNav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </HeaderNav>
            
            

        </div>
    </container>
  )
}

export default Header;

const HeaderNav = styled.nav`
    width: 100%;
    max-width: 300px;
    display: flex;
    margin: auto;
    justify-content: space-between;
    a{
        padding: 20px 10px;
    }
`;