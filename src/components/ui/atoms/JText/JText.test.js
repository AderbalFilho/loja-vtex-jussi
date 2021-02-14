import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import JText from './JText';

describe('JText', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<JText>Jüssi</JText>);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });

  describe('change size', () => {
    it('renders size normal when no size is passed', () => {
      const { container } = render(<JText>Jüssi</JText>);
      const text = container.querySelector('.j-text');

      expect(text.classList).toContain('j-text--normal');
    });

    it('renders size small', () => {
      const { container } = render(<JText size="small">Jüssi</JText>);
      const text = container.querySelector('.j-text');

      expect(text.classList).toContain('j-text--small');
    });

    it('renders size normal', () => {
      const { container } = render(<JText size="normal">Jüssi</JText>);
      const text = container.querySelector('.j-text');

      expect(text.classList).toContain('j-text--normal');
    });
  });

  describe('change color', () => {
    it('renders color default when no color is passed', () => {
      const { container } = render(<JText>Jüssi</JText>);
      const text = container.querySelector('.j-text');

      expect(text.classList).toContain('j-text--default');
    });

    it('renders color white', () => {
      const { container } = render(<JText color="white">Jüssi</JText>);
      const text = container.querySelector('.j-text');

      expect(text.classList).toContain('j-text--white');
    });

    it('renders color black', () => {
      const { container } = render(<JText color="black">Jüssi</JText>);
      const text = container.querySelector('.j-text');

      expect(text.classList).toContain('j-text--black');
    });

    it('renders color dark-grey', () => {
      const { container } = render(<JText color="dark-grey">Jüssi</JText>);
      const text = container.querySelector('.j-text');

      expect(text.classList).toContain('j-text--dark-grey');
    });

    it('renders color pink', () => {
      const { container } = render(<JText color="pink">Jüssi</JText>);
      const text = container.querySelector('.j-text');

      expect(text.classList).toContain('j-text--pink');
    });

    it('renders color default', () => {
      const { container } = render(<JText color="default">Jüssi</JText>);
      const text = container.querySelector('.j-text');

      expect(text.classList).toContain('j-text--default');
    });
  });

  it('renders children', () => {
    const { container } = render(<JText>Jüssi</JText>);
    const text = container.querySelector('.j-text');

    expect(text.textContent).toBe('Jüssi');
  });

  it('renders classes', () => {
    const { container } = render(<JText classes="text1">Jüssi</JText>);
    const text = container.querySelector('.j-text');

    expect(text.classList).toContain('text1');
  });
});
