import React from 'react';
import TestRenderer from 'react-test-renderer';

import OurSolutionsCard from './OurSolutionsCard';

describe('OurSolutionsCard', () => {
  const solution = {
    description: 'Descrição do produto #1',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    img:
      'https://static.openfoodfacts.org/images/products/073/762/806/4502/ingredients_en.10.400.jpg',
    imgAlt: 'P1',
    link: '',
    name: 'Nome do Produto #1',
  };

  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(
      <OurSolutionsCard solution={solution} />
    );
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
