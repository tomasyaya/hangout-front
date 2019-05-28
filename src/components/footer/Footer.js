import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = props => {
  
  return(
    <div className="footer">
      <h3>Footer</h3>
      <Link to="/create">Create</Link>
    </div>
  )
}

export default Footer;