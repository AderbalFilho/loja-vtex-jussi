import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import JButton from './JButton';

describe('JButton', () => {
  describe('change background-color', () => {
    it('renders transparent when no backgroundColor is passed', () => {
      const { container } = render(<JButton>Jüssi</JButton>);
      const button = container.querySelector('.j-button');

      expect(button.classList).toContain('j-button--back-transparent');
    });

    it('renders green', () => {
      const { container } = render(
        <JButton backgroundColor="green">Jüssi</JButton>
      );
      const button = container.querySelector('.j-button');

      expect(button.classList).toContain('j-button--back-green');
    });

    it('renders transparent', () => {
      const { container } = render(
        <JButton backgroundColor="transparent">Jüssi</JButton>
      );
      const button = container.querySelector('.j-button');

      expect(button.classList).toContain('j-button--back-transparent');
    });
  });

  describe('change border color', () => {
    it('renders black when no border is passed', () => {
      const { container } = render(<JButton>Jüssi</JButton>);
      const button = container.querySelector('.j-button');

      expect(button.classList).toContain('j-button--border-black');
    });

    it('renders pink', () => {
      const { container } = render(<JButton border="pink">Jüssi</JButton>);
      const button = container.querySelector('.j-button');

      expect(button.classList).toContain('j-button--border-pink');
    });

    it('renders green', () => {
      const { container } = render(<JButton border="green">Jüssi</JButton>);
      const button = container.querySelector('.j-button');

      expect(button.classList).toContain('j-button--border-green');
    });

    it('renders black', () => {
      const { container } = render(<JButton border="black">Jüssi</JButton>);
      const button = container.querySelector('.j-button');

      expect(button.classList).toContain('j-button--border-black');
    });
  });

  describe('change color', () => {
    it('renders black when no color is passed', () => {
      const { container } = render(<JButton>Jüssi</JButton>);
      const button = container.querySelector('.j-button');

      expect(button.classList).toContain('j-button--black');
    });

    it('renders pink', () => {
      const { container } = render(<JButton color="pink">Jüssi</JButton>);
      const button = container.querySelector('.j-button');

      expect(button.classList).toContain('j-button--pink');
    });

    it('renders black', () => {
      const { container } = render(<JButton color="black">Jüssi</JButton>);
      const button = container.querySelector('.j-button');

      expect(button.classList).toContain('j-button--black');
    });
  });

  describe('change radius', () => {
    it('renders normal when no radius is passed', () => {
      const { container } = render(<JButton>Jüssi</JButton>);
      const button = container.querySelector('.j-button');

      expect(button.classList).toContain('j-button--rad-normal');
    });

    it('renders circle', () => {
      const { container } = render(<JButton radius="circle">Jüssi</JButton>);
      const button = container.querySelector('.j-button');

      expect(button.classList).toContain('j-button--rad-circle');
    });

    it('renders normal', () => {
      const { container } = render(<JButton radius="normal">Jüssi</JButton>);
      const button = container.querySelector('.j-button');

      expect(button.classList).toContain('j-button--rad-normal');
    });
  });

  describe('change tag', () => {
    it('matches snapshot with button when no tag is passed', () => {
      const testRenderer = TestRenderer.create(<JButton>Jüssi</JButton>);
      const jsonComponent = testRenderer.toJSON();

      expect(jsonComponent).toMatchSnapshot();
    });

    it('renders a', () => {
      const { container } = render(
        <JButton tag="a" href="https://jussi.com.br/">
          Jüssi
        </JButton>
      );
      const button = container.querySelector('.j-button');

      expect(button.classList).toContain('j-button--link');
    });

    it('matches snapshot with a', () => {
      const testRenderer = TestRenderer.create(
        <JButton tag="a" href="https://jussi.com.br/">
          Jüssi
        </JButton>
      );
      const jsonComponent = testRenderer.toJSON();

      expect(jsonComponent).toMatchSnapshot();
    });

    it('matches snapshot with button', () => {
      const testRenderer = TestRenderer.create(
        <JButton tag="button">Jüssi</JButton>
      );
      const jsonComponent = testRenderer.toJSON();

      expect(jsonComponent).toMatchSnapshot();
    });
  });

  it('renders children', () => {
    const { container } = render(<JButton>Jüssi</JButton>);
    const button = container.querySelector('.j-button');

    expect(button.textContent).toBe('Jüssi');
  });

  it('renders classes', () => {
    const { container } = render(
      <JButton classes="button-offer">Jüssi</JButton>
    );
    const button = container.querySelector('.j-button');

    expect(button.classList).toContain('button-offer');
  });

  it('renders rest', () => {
    const { container } = render(
      <JButton tag="a" href="/buy">
        Jüssi
      </JButton>
    );
    const button = container.querySelector('.j-button');

    expect(button.getAttribute('href')).toBe('/buy');
  });
});
