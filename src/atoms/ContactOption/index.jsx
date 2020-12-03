import React from 'react';
import './index.css';

const ContactOption = ({url, src, alt, text}) => {
  return (
    <a className="contact-option" href={url} rel="noopener noreferrer" target="_blank">
      <img src={src} alt={alt} />
      {text && <span>{text}</span>}
    </a>
  );
};

export default ContactOption;
