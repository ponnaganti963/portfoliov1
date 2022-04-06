import React from 'react';
import CTA from '../header/CTA';
import styled from "styled-components";
import HeaderSocialmedia from './HeaderSocialmedia';
import Project from '../home/Project';
import {myprojects} from "../../allprojects.js";

function Home() {
  return (
      <>
      
      <div className="container">   
            <CTA />
            <MyImage src="/asserts/myimage.jpg" />
            <HeaderSocialmedia />
      </div>
        <section>
            <div className="container">
                <h2>Featured Projects</h2>
                <ProjectsContainer>
                    <Project  project={myprojects[0]}/>
                    <Project  project={myprojects[1]}/>
                    <Project  project={myprojects[2]}/>
                </ProjectsContainer>
            </div>
        </section>
    
      </>
        
  )
}

export default Home;

const MyImage = styled.img`
    background: linear-gradient(var(--color-white), tranparent);
    width: 22rem;
    height: 25rem;
    position: relative;
    left: calc(50% - 11rem);
    margin-top: 2rem;
    border-radius: 12rem 12rem 0 0;
    overflow: hidden;
    padding:  1.5rem;
    z-index: 10;
`;


const ProjectsContainer = styled.div`
    max-width: 1000px;
    margin: auto;
    width: 100%;
`;