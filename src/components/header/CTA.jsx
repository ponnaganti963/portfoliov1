import React from 'react';
import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';

function CTA() {
  return (
    <CTAcontainer>
        <a href="/asserts/cv.docx" download className="btn" rel="nonrefferer">Download CV</a>
        <a href="tel:8790618202" className="btn btn-primary" rel="nonrefferer">Let's Talk <PhoneIcon style={{fontSize: 20, marginBottom: '-3.5'}}/></a>
    </CTAcontainer>
  )
}

export default CTA;

const CTAcontainer = styled.div`
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;