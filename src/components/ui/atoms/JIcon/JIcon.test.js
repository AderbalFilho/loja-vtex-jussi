import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import JIcon from './JIcon';

describe('JIcon', () => {
  describe('With icon search', () => {
    it('matches snapshot', () => {
      const testRenderer = TestRenderer.create(<JIcon icon="search" />);
      const jsonComponent = testRenderer.toJSON();

      expect(jsonComponent).toMatchSnapshot();
    });

    it('renders right alt', () => {
      const { container } = render(<JIcon icon="search" />);
      const icon = container.querySelector('.j-icon');

      expect(icon.alt).toContain('buscar');
    });
  });

  describe('With shopping cart search', () => {
    it('matches snapshot', () => {
      const testRenderer = TestRenderer.create(<JIcon icon="shoppingCart" />);
      const jsonComponent = testRenderer.toJSON();

      expect(jsonComponent).toMatchSnapshot();
    });

    it('renders right alt', () => {
      const { container } = render(<JIcon icon="shoppingCart" />);
      const icon = container.querySelector('.j-icon');

      expect(icon.alt).toContain('carrinho de compras');
    });
  });

  it('renders classes', () => {
    const { container } = render(<JIcon classes="icon-search" icon="search" />);
    const icon = container.querySelector('.j-icon');

    expect(icon.classList).toContain('icon-search');
  });
});
