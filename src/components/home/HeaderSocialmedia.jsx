import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from  "styled-components";

function HeaderSocialmedia() {
  return (
    <Socials_container>
        <a href="https://github.com/ponnaganti963" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://github.com/ponnaganti963" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        <a href="https://github.com/ponnaganti963" target="_blank" rel="noreferrer"><InstagramIcon /></a>
        
    </Socials_container>
  )
}

export default HeaderSocialmedia;

const Socials_container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    gap: 0.8rem;
    bottom: 2rem;
    left: 0;
    ::after{
        content: "";
        width:1px;
        height: 2rem;
        background: var(--color-primary);
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`;  


