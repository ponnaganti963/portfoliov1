import React from 'react';
import styled from  "styled-components";
import GitHubIcon from '@mui/icons-material/GitHub';


function Project({project}) {

    const ProjectWrapper =styled.div`
        width: 100%;
        display: flex;
        align-items: start;
        flex-direction: ${project.id%2 === 0 ? "row-reverse" :"row"};
        margin: 30px auto;
        @media screen and (max-width: 700px){
            display: block;
        } 

    `;
  return (
      <ProjectWrapper>
          <ImageContainer>
            <Image src={project.img}></Image>
            <Imagewrap></Imagewrap>
          </ImageContainer>
          <ProjectContents>
              <div style={{display:'flex',alignItems: 'center',gap:30}}>
              <span><a href={project.link} target="_blank" rel="noreferrer"><h3>{project.name}</h3></a></span>
              <span><a href={project.github} target="_blank" rel="noreferrer"><GitHubIcon /></a></span>
              </div>
              
              <p className="text-light">{project.description}</p>
              {
                  project.tags.map(tag => (
                      <Tag>
                          {tag}
                      </Tag>
                  ))
              }

          </ProjectContents>
      </ProjectWrapper>
  )
}

export default Project;



const ImageContainer =styled.div`
    width: 50%;
    /* flex: 1; */
    border-radius: 10px;
    overflow: hidden;
    margin: 10px;
    height: auto;
    position: relative;
    @media screen and (max-width: 700px){
        width: 100%;
        margin: 0;
    } 
`;

const Imagewrap = styled.span`
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 1;

    background-image: linear-gradient(var(--color-primary-vairant) , transparent);
    z-index: 100;
    top:0;
    border-radius: 10px;
    
    transition: all 0.5s ease-in-out;
    :hover{
        opacity: 0;
    }
    

`;

const Image =styled.img`
    min-height: 200px;
    max-height: 250px;
    object-fit: cover;
    border-radius: 10px;
    
`;
const ProjectContents =styled.div`
    flex: 1;
    padding: 20px 10px;
    @media screen and (max-width: 700px){
        padding-left: 0;
    }

    h3{
        text-align: left;
        display: inline-block;
    }
    >span{
        cursor: pointer;
    }
`;

const Tag = styled.h5`
    margin: 10px 10px 10px 0;
    padding: 5px;
    display: inline-block;
    border-radius: 10px;
    background-color: #13131d;
    text-transform: capitalize;
    border: 1px dashed var(--color-primary);
    transition: all 0.4s linear;
    :hover{
        background-color: #deedf866;
        color: #1f1f38;
    }
`;