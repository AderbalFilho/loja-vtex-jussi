import React from 'react';

import { JLink, JText, JTitle, JSection } from '@ui';

import './ContactUs.scss';

function ContactUs() {
  return (
    <JSection color="pink" classes="contact-us">
      <div className="contact-us__container">
        <JTitle tag="h2" color="white" classes="contact-us__title">
          Essa loja foi construída usando uma das nossas soluções da plataforma
          VTEX. tenha a sua.
        </JTitle>
        <JText color="white" classes="contact-us__contact">
          Entre em contato
        </JText>
        <JLink href="mailto:comercial@jussi.com.br" classes="contact-us__mail">
          comercial@jussi.com.br
        </JLink>
      </div>
    </JSection>
  );
}

export default ContactUs;
