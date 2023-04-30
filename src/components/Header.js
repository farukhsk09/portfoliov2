import React from 'react';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
function Header() {
  return (
    <header className='header'>
      <div className='namaiva'><Badge bg="success" className='badge'><a href="https://twitter.com/iamsam_sk"><FontAwesomeIcon icon={faTwitter} /> iamsam_sk</a></Badge></div>
    </header>
  );
}

export default Header;
