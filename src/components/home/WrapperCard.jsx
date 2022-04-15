import React from 'react';
import styled from  "styled-components";

function WrapperCard(cardType) {
  return (
        <Wrap>
            {
                Object.values(cardType)[0].map(skill=>(
                    <p>{skill}</p>
                ))
            }
        </Wrap>
  )
}

export default WrapperCard;


const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-content: flex-start;
    p{
        padding: 3px 10px;
        border-radius: 15px;
        border: 1px solid #ffffff;
        margin-top: 5px;
        background-color: #665fee;
    }
    @media screen and (max-width: 500px) {
        width:100%;
    }
`;