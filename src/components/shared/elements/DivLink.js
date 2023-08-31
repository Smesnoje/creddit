import React from 'react';
import { Link } from 'react-router-dom';

import './DivLink.css'

const DivLink = ({ to, children }) => {
  return (
    <Link to={to} className='divlink-link'>
      <div className="div-link">{children}</div>
    </Link>
  );
};

export default DivLink