import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './ContactInfo.css';

function ContactInfo() {
  return (
    <Container className="contact-container">
      <Row className="social-links">
        <Col>
          Contact:
        </Col>
        <Col>
          <a href="https://www.instagram.com/iamsam_sk" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </Col>
        <Col>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </Col>
        <Col>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactInfo;
