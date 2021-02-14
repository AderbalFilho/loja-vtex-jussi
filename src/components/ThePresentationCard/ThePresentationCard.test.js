import React from 'react';
import TestRenderer from 'react-test-renderer';

import ThePresentationCard from './ThePresentationCard';

describe('ThePresentationCard', () => {
  const offers = [
    {
      img: 'link to fridgeImg',
      imgAlt: 'Refrigerador',
      buttonText: 'Mais Detalhes',
      link: '#',
    },
    {
      img: 'link to foodMixerImg',
      imgAlt: 'Batedeira',
      buttonText: 'Comprar em 12x',
      action: jest.fn(),
    },
  ];

  it('matches snapshot with link', () => {
    const testRenderer = TestRenderer.create(
      <ThePresentationCard offer={offers[0]} />
    );
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });

  it('matches snapshot with action', () => {
    const testRenderer = TestRenderer.create(
      <ThePresentationCard offer={offers[1]} />
    );
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
