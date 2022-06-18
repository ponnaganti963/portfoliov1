import React from 'react';
import styled from "styled-components";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
  return (
    <div style={{marginTop:'70px'}}>
      <FooterSection>
        <h2>Manikanta</h2>
        <p>Made with <Heart></Heart> in 2022</p>
      </FooterSection>

    </div>
  )
}

export default Footer;

const FooterSection = styled.div`
    background-color: #0e0d0d83;
    padding: 20px 0;
    bottom: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const Heart = styled(FavoriteIcon)`
    color: red;
    margin-bottom: -6px;
    cursor: pointer;
    :hover{
      animation: zoomIn 800ms ease-in-out infinite;
    }

    @keyframes zoomIn {
      from{ transform: scale(0.8)}
      to{ transform: scale(1.2)}
    }
`;