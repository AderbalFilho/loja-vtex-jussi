import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import JTitle from './JTitle';

describe('JTitle', () => {
  describe('change tag', () => {
    it('renders h1', () => {
      const { container } = render(<JTitle tag="h1">Jüssi</JTitle>);
      const title = container.querySelector('.j-title');

      expect(title.classList).toContain('j-title--extra-large');
    });

    it('matches snapshot with h1', () => {
      const testRenderer = TestRenderer.create(<JTitle tag="h1">Jüssi</JTitle>);
      const jsonComponent = testRenderer.toJSON();

      expect(jsonComponent).toMatchSnapshot();
    });

    it('renders h2', () => {
      const { container } = render(<JTitle tag="h2">Jüssi</JTitle>);
      const title = container.querySelector('.j-title');

      expect(title.classList).toContain('j-title--large');
    });

    it('matches snapshot with h2', () => {
      const testRenderer = TestRenderer.create(<JTitle tag="h2">Jüssi</JTitle>);
      const jsonComponent = testRenderer.toJSON();

      expect(jsonComponent).toMatchSnapshot();
    });
  });

  describe('change color', () => {
    it('renders black when no color is passed', () => {
      const { container } = render(<JTitle tag="h1">Jüssi</JTitle>);
      const title = container.querySelector('.j-title');

      expect(title.classList).toContain('j-title--black');
    });

    it('renders white', () => {
      const { container } = render(
        <JTitle tag="h1" color="white">
          Jüssi
        </JTitle>
      );
      const title = container.querySelector('.j-title');

      expect(title.classList).toContain('j-title--white');
    });

    it('renders green', () => {
      const { container } = render(
        <JTitle tag="h1" color="green">
          Jüssi
        </JTitle>
      );
      const title = container.querySelector('.j-title');

      expect(title.classList).toContain('j-title--green');
    });

    it('renders black', () => {
      const { container } = render(
        <JTitle tag="h1" color="black">
          Jüssi
        </JTitle>
      );
      const title = container.querySelector('.j-title');

      expect(title.classList).toContain('j-title--black');
    });
  });

  it('renders children', () => {
    const { container } = render(<JTitle tag="h1">Jüssi</JTitle>);
    const title = container.querySelector('.j-title');

    expect(title.textContent).toBe('Jüssi');
  });

  it('renders classes', () => {
    const { container } = render(
      <JTitle tag="h1" classes="title1">
        Jüssi
      </JTitle>
    );
    const title = container.querySelector('.j-title');

    expect(title.classList).toContain('title1');
  });
});
