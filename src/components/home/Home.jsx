import React, { useEffect, useState } from 'react';
import CTA from '../header/CTA';
import styled from "styled-components";
import HeaderSocialmedia from './HeaderSocialmedia';
import Project from '../home/Project';
import {myprojects} from "../../allprojects.js";
import WrapperCard from './WrapperCard';

function Home() {
    const [toggle,setToggle] = useState(true);
    const [cardToggle,setCardToggle] = useState(true);
    const skills = ['HTML','CSS','JS','ReactJs','Firebase','NodeJS','MongoDB','ExpressJS','C','Python'];
    const tools = ['Git','GitHub','npm','VSCode','Styled-Components','Material UI','Bootstrap','Postman'];
 
    useEffect(() => {
            if(window.innerWidth >= 600){
                setCardToggle(true);
            }
            else{
                setCardToggle(false);
                document.querySelector('.skills').style.color = toggle ? '#478de2' : 'inherit'; ;
                document.querySelector('.tools').style.color = !toggle ? '#478de2' : 'inherit';
                
            }
        
    },[toggle])
    
  return (
      <>
      
      <div className="container">   
            <CTA />
            <MyImage src="/asserts/profile.jpg" />
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

        <section>
            <div className="container">
                <Wrapper>
                    <Skills>
                        <h2 className="skills" onClick={() => setToggle(true)}>Skills</h2>
                    </Skills>
                    <Tools>
                        <h2 className="tools" onClick={() => setToggle(false)}>Tools</h2>
                    </Tools>
                </Wrapper>
                {
                    cardToggle ?
                    (
                        <Wrapper>
                            <WrapperCard cardType={skills}/>
                            <WrapperCard cardType={tools}/>
                        </Wrapper>
                    )
                    : 
                    (
                        <Wrapper>
                            {toggle ?
                                <WrapperCard cardType={skills}/>
                            :
                                <WrapperCard cardType={tools}/>
                            }
                        </Wrapper>
                    )
                }
                
                
            </div>
        </section>
    
      </>
        
  )
}

export default Home;

const MyImage = styled.img`
    width: 100%;
    max-width: 21rem;
    height: 24rem;
    background-position: top center;
    position: relative;
    left: calc(50% - 10.5rem);
    margin-top: 2rem;
    border-radius: 0 10rem 0 10rem  ;
    margin:  1.5rem 0;
    z-index: 10;
    cursor: pointer;
    transition: all 0.3s linear;
    
    :hover{
        border-radius: 6rem;
        transform: scale(0.9);
        box-shadow: 6px 2px 10px #5e5858;
       
    }
    
`;


const ProjectsContainer = styled.div`
    max-width: 1000px;
    margin: auto;
    width: 100%;
`;

const Wrapper = styled.div`
    display: flex;
    gap: 20px;
`;

const Skills = styled.div`
    flex: 1;

    h2{
        border-bottom: 2px solid;
        margin-bottom: 20px;
        transition: all 0.2s linear;
        @media screen and (max-width:600px){
            cursor: pointer;
            :hover{
                color: #096be2;
            }
        }
    }
    
`;

const Tools = styled.div`
    flex: 1;
    
    h2{
        border-bottom: 2px solid;
        margin-bottom: 20px;
        transition: all 0.2s linear;
        @media screen and (max-width:600px){
            cursor: pointer;
            :hover{
                color: #096be2;
            }
        }
    }
`;
