import React from 'react';

import { JButton, JCard, JSection, JText, JTitle } from '@ui';

import './ThePresentation.scss';

function ThePresentation() {
  return (
    <JSection classes="the-presentation" color="green">
      <div className="the-presentation__content">
        <div className="the-presentation__left-content">
          <JTitle tag="h1" classes="the-presentation__slashes">
            &#47;&#47;
          </JTitle>
          <div>
            <JTitle tag="h1" classes="the-presentation__title">
              Criamos lojas que vendem mais.
            </JTitle>
            <JText color="black" classes="the-presentation__subtitle">
              A Jüssi é especialista na criação de lojas usando a plataforma
              VTEX. Precisa criar sua loja ou migrar de plataforma?
            </JText>
            <JButton
              tag="a"
              href="#"
              classes="the-presentation__solutions-button"
            >
              Veja nossas soluções
            </JButton>
          </div>
        </div>
        <div className="the-presentation__right-content">
          <JCard size="small" shadow="black"></JCard>
          <JCard size="small" shadow="black"></JCard>
          <JCard size="small" shadow="black"></JCard>
        </div>
      </div>
    </JSection>
  );
}

export default ThePresentation;
