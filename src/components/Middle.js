import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactInfo from './ContactInfo';
import { Card } from 'react-bootstrap';
import logo from '../sameer.jpg';
import Projects from './Projects';

function Middle() {
  return (
    <div className="middle"> 
      <Container>
      <div className='Photo'>
          <img src={logo}></img>
        </div>
        <div className='About'>
          <h6>Hi, I'm <strong>Sameer</strong>, a professional software developer with 5* years of experience in the industry. <br></br>
          </h6>
          Over the years, I've honed my skills in both front-end and back-end development, becoming proficient 
            in languages such as Java, Python , React and Node.js.<br></br>
            I've had the opportunity to work on a variety of projects, 
            from modelling cloud based data stores to  
            high performant scalable APIs. <br></br>
            When I'm not coding, you can usually find me in my home watching football or anime.
        </div>
        <Projects></Projects>
        <ContactInfo />
      </Container>
    </div>
  );
}

export default Middle;
