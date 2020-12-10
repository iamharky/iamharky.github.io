import React from 'react';
import ContactOption from '../atoms/ContactOption';
import './index.css';

const Contact = () => {
  return (
    <div className="section" id="contact">
      <ContactOption
        url="mailto:harky@yandex.com"
        src={require('../../public/images/at.svg')}
        alt="mail"
        text="harky@yandex.com"
      />

      <ContactOption
        url="tel:+905438691895"
        src={require('../../public/images/telephone.svg')}
        alt="telephone"
        text="+90 543 869 1895"
      />

      <div>
        <ContactOption
          url="https://www.github.com/iamharky"
          src={require('../../public/images/github.svg')}
          alt="github"
        />

        <ContactOption
          url="https://www.linkedin.com/in/harky"
          src={require('../../public/images/linkedin.svg')}
          alt="linkedin"
        />

        <ContactOption url="https://codepen.io/harky" src={require('../../public/images/codepen.png')} alt="codepen" />

        <ContactOption url="https://t.me/iamharky" src={require('../../public/images/telegram.svg')} alt="telegram" />

        <ContactOption
          url="https://api.whatsapp.com/send?phone=+905438691895"
          src={require('../../public/images/whatsapp.png')}
          alt="whatsapp"
        />
      </div>
    </div>
  );
};

export default Contact;
