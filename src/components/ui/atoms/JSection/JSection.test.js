import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import JSection from './JSection';

describe('JSection', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<JSection>Jüssi</JSection>);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });

  describe('change color', () => {
    it('renders background-color white when no parameter is passed', () => {
      const { container } = render(<JSection>Jüssi</JSection>);
      const section = container.querySelector('.j-section');

      expect(section.classList).toContain('j-section--white');
    });

    it('renders background-color black', () => {
      const { container } = render(<JSection color="black">Jüssi</JSection>);
      const section = container.querySelector('.j-section');

      expect(section.classList).toContain('j-section--black');
    });

    it('renders background-color pink', () => {
      const { container } = render(<JSection color="pink">Jüssi</JSection>);
      const section = container.querySelector('.j-section');

      expect(section.classList).toContain('j-section--pink');
    });

    it('renders background-color green', () => {
      const { container } = render(<JSection color="green">Jüssi</JSection>);
      const section = container.querySelector('.j-section');

      expect(section.classList).toContain('j-section--green');
    });

    it('renders background-color white', () => {
      const { container } = render(<JSection color="white">Jüssi</JSection>);
      const section = container.querySelector('.j-section');

      expect(section.classList).toContain('j-section--white');
    });
  });

  it('renders children', () => {
    const { container } = render(<JSection>Jüssi</JSection>);
    const section = container.querySelector('.j-section');

    expect(section.textContent).toBe('Jüssi');
  });

  it('renders classes', () => {
    const { container } = render(<JSection classes="section1">Jüssi</JSection>);
    const section = container.querySelector('.j-section');

    expect(section.classList).toContain('section1');
  });
});
