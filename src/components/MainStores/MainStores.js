import React from 'react';

import { JLink, JSection, JText } from '@ui';
import { LOGOS } from '@constants';

import './MainStores.scss';

function MainStores() {
  return (
    <JSection classes="main-stores">
      <div className="main-stores__container">
        <JText color="black" classes="main-stores__text">
          Nossas principais lojas VTEX
        </JText>
        <JText color="black" classes="main-stores__text main-stores__arrow">
          {window.innerWidth < 1024 ? '↓' : '→'}
        </JText>
        {LOGOS.map((logo) => {
          return (
            <JLink
              key={logo.imgAlt}
              href={logo.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={logo.img1x}
                srcSet={`${logo.img1x}, ${logo.img2x} 2x, ${logo.img3x} 3x`}
                alt={logo.imgAlt}
                className="main-stores__logo-img"
              />
            </JLink>
          );
        })}
      </div>
    </JSection>
  );
}

export default MainStores;
