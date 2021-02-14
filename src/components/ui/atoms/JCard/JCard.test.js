import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import JCard from './JCard';

describe('JCard', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<JCard>Jüssi</JCard>);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });

  describe('change radius', () => {
    it('renders normal when no radius is passed', () => {
      const { container } = render(<JCard>Jüssi</JCard>);
      const card = container.querySelector('.j-card');

      expect(card.classList).toContain('j-card--rad-normal');
    });

    it('renders small', () => {
      const { container } = render(<JCard radius="small">Jüssi</JCard>);
      const card = container.querySelector('.j-card');

      expect(card.classList).toContain('j-card--rad-small');
    });

    it('renders normal', () => {
      const { container } = render(<JCard radius="normal">Jüssi</JCard>);
      const card = container.querySelector('.j-card');

      expect(card.classList).toContain('j-card--rad-normal');
    });
  });

  it('renders shadow', () => {
    const { container } = render(<JCard shadow="black">Jüssi</JCard>);
    const card = container.querySelector('.j-card');

    expect(card.classList).toContain('j-card--shadow');
  });

  describe('change size', () => {
    it('renders normal when no size is passed', () => {
      const { container } = render(<JCard>Jüssi</JCard>);
      const card = container.querySelector('.j-card');

      expect(card.classList).toContain('j-card--size-normal');
    });

    it('renders small', () => {
      const { container } = render(<JCard size="small">Jüssi</JCard>);
      const card = container.querySelector('.j-card');

      expect(card.classList).toContain('j-card--size-small');
    });

    it('renders normal', () => {
      const { container } = render(<JCard size="normal">Jüssi</JCard>);
      const card = container.querySelector('.j-card');

      expect(card.classList).toContain('j-card--size-normal');
    });
  });

  it('renders children', () => {
    const { container } = render(<JCard>Jüssi</JCard>);
    const card = container.querySelector('.j-card');

    expect(card.textContent).toBe('Jüssi');
  });

  it('renders classes', () => {
    const { container } = render(<JCard classes="card-offer">Jüssi</JCard>);
    const card = container.querySelector('.j-card');

    expect(card.classList).toContain('card-offer');
  });
});
