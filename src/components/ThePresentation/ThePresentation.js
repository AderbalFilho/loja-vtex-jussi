import React from 'react';

import { JButton, JSection, JText, JTitle } from '@ui';
import ThePresentationCard from '@components/ThePresentationCard';
import { OFFERS } from '@constants';

import './ThePresentation.scss';

function ThePresentation() {
  return (
    <JSection classes="the-presentation" color="green">
      <div className="the-presentation__content">
        <div className="the-presentation__left-content">
          <JTitle tag="h1" color="white" classes="the-presentation__slashes">
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
              href="https://jussi.com.br/services.html"
              target="_blank"
              rel="noreferrer noopener"
              classes="the-presentation__solutions-button"
            >
              Veja nossas soluções
            </JButton>
          </div>
        </div>
        <div className="the-presentation__right-content">
          <ThePresentationCard
            offer={OFFERS[0]}
            classes="the-presentation__offer1"
          />
          <ThePresentationCard
            offer={OFFERS[1]}
            classes="the-presentation__offer2"
          />
          <ThePresentationCard
            offer={OFFERS[2]}
            classes="the-presentation__offer3"
          />
        </div>
      </div>
    </JSection>
  );
}

export default ThePresentation;
