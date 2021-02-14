import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return <div className="footer">
    <p>Copywritght emzys © {year}</p>
  </div>
};

export default Footer;