import React from 'react';

import { JButton, JInput, JTitle, JSection } from '@ui';

import './RegisterLead.scss';

function RegisterLead() {
  function submit(e) {
    e.preventDefault();
    // Register lead
  }

  return (
    <JSection color="black" classes="register-lead">
      <div className="register-lead__container">
        <div className="register-lead__titles">
          <JTitle tag="h2" color="green">
            &#47;&#47;
          </JTitle>
          <JTitle tag="h2" color="white">
            receba novidades da nossa área de produtos digitais.
          </JTitle>
        </div>
        <form onSubmit={submit} className="register-lead__register">
          <JInput
            type="text"
            placeholder="Digite seu e-mail"
            classes="register-lead__input"
            classesContainer="register-lead__input-container"
          />
          <JButton type="submit" color="green" classes="register-lead__button">
            Cadastrar
          </JButton>
        </form>
      </div>
    </JSection>
  );
}

export default RegisterLead;
