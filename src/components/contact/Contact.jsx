import styled from 'styled-components';
import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitDetais= (e) =>{
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwtS-miBqDfohWZaujt4rLJ5OTxHgjultTvDpOXA-UMKiSYzCgyXa_vFayFObmcEfYv/exec';
    
    if(email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)){
    const Form = new FormData();
    Form.append('email',email);
    Form.append('message',message);
    Form.append('name',name);
    fetch(scriptURL, {mode: 'no-cors',method: 'POST', body: Form})
    .then(response =>{
         console.log(Form.data());
    })
    .catch(error =>{
       
        console.error('Error!', error.message)
    });
    }else{
      alert("Please fill your details");
    }
  }

  return (
    <div>
      <h1>Contact</h1>
      <p style={{textAlign: 'center'}}>Connect me on different social media:</p>
      <Socials_container>
        <a href="https://github.com/ponnaganti963" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://github.com/ponnaganti963" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        <a href="https://github.com/ponnaganti963" target="_blank" rel="noreferrer"><InstagramIcon /></a>
      </Socials_container>

      <Divider>
        <h2>OR</h2>
      </Divider>

      <section>
        <ContactForm onSubmit={submitDetais}>
          <input 
            placeholder= 'Name'
            onChange= {(e)=>setName(e.target.value)}
            required
          />
          <input 
            placeholder= 'Email'
            type="email"
            onChange= {(e)=>setEmail(e.target.value)}
            required
            autoComplete="new-password"
          />
          <textarea 
          rows="7"
          placeholder="Enter Your Message"
          onChange= {(e)=>setMessage(e.target.value)}
          >

          </textarea>

          <button type="submit" >
          Send
          <SendIcon/>
          </button>
          
        </ContactForm>
      </section>
    </div>
  )
}

export default Contact;

const Socials_container = styled.div`
  display: flex;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  gap: 40px;
  a > svg{
    height: 40px;
    width: 40px;
  }

`;

const Divider = styled.div`
    text-align: center;
    h2{
      display: inline-block;
      position: relative;
    }
    h2::before{
      content: "";
      position: absolute;
      width: 4rem;
      height: 2px; 
      z-index: 100;
      background-color: #fff;
      left: -4.5rem;
      top: 50%;
    }
    h2::after{
      content: "";
      position: absolute;
      width: 4rem;
      height: 2px; 
      z-index: 100;
      background-color: #fff;
      right: -4.5rem;
      top: 50%;
    }
`;


const ContactForm = styled.form`
  display: flex ;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >input , textarea{
    /* height: 50px; */
    width: 100%;
    max-width: 500px;
    background-color: #1a1919ae;
    border: none;
    border-radius: 0.3rem;
    font-size: 1rem;
    padding: 20px 10px;
    margin: 10px auto;
    color: #fff;
    ::placeholder{
      color: #fff;
    }
  }
  textarea{
    resize: vertical;
    line-height: 1.3rem;
  }

  button{
    margin: 10px auto;
    font-size: 20px;
    padding: 10px 30px;
    width: 100%;
    max-width: 500px;
    border-radius: 0.3rem;
    display: flex;
    gap: 10px;
    justify-content: center;
    border: none;
    outline: none;
    transition: all 0.2s linear;
    cursor: pointer;
    :hover{
      /* max-width: calc(500px - 12px); */
      transform: scale(0.97);
      box-shadow: 6px 6px #ffffff73 , -6px -6px #ffffff73;
    }
  }
`;