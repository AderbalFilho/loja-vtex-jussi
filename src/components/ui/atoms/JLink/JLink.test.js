import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import JLink from './JLink';

describe('JLink', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<JLink>Jüssi</JLink>);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });

  it('renders children', () => {
    const { container } = render(<JLink>Jüssi</JLink>);
    const link = container.querySelector('.j-link');

    expect(link.textContent).toBe('Jüssi');
  });

  it('renders classes', () => {
    const { container } = render(<JLink classes="nav-link">Jüssi</JLink>);
    const link = container.querySelector('.j-link');

    expect(link.classList).toContain('nav-link');
  });

  it('renders rest', () => {
    const { container } = render(<JLink href="/search">Jüssi</JLink>);
    const link = container.querySelector('.j-link');

    expect(link.getAttribute('href')).toBe('/search');
  });
});
