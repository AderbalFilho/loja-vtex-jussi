import React from 'react';

import { JButton, JSection, JText, JTitle } from '@ui';
import ThePresentationCard from '@components/ThePresentationCard';

import fridgeImg from '@assets/img/fridge.png';
import foodMixerImg from '@assets/img/food-mixer.png';
import whiskyImg from '@assets/img/whisky.png';

import './ThePresentation.scss';

function ThePresentation() {
  const offers = [
    {
      img: fridgeImg,
      imgAlt: 'Refrigerador',
      buttonText: 'Mais Detalhes',
      link: '#',
    },
    {
      img: foodMixerImg,
      imgAlt: 'Batedeira',
      buttonText: 'Comprar em 12x',
      action: () => {
        /* Add to cart */
      },
    },
    {
      img: whiskyImg,
      imgAlt: 'Whisky',
      buttonText: 'Adicionar a sacola',
      action: () => {
        /* Add to cart */
      },
    },
  ];

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
            offer={offers[0]}
            classes="the-presentation__offer1"
          />
          <ThePresentationCard
            offer={offers[1]}
            classes="the-presentation__offer2"
          />
          <ThePresentationCard
            offer={offers[2]}
            classes="the-presentation__offer3"
          />
        </div>
      </div>
    </JSection>
  );
}

export default ThePresentation;
