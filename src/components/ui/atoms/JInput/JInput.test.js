import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import JInput from './JInput';

describe('JInput', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<JInput type="text" />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });

  describe('with icon', () => {
    it('matches snapshot', () => {
      const testRenderer = TestRenderer.create(
        <JInput type="text" icon="search" />
      );
      const jsonComponent = testRenderer.toJSON();

      expect(jsonComponent).toMatchSnapshot();
    });

    it('fire event when icon clicked', () => {
      const onClick = jest.fn();
      const { getByAltText } = render(
        <JInput type="text" icon="search" iconClicked={onClick} />
      );

      fireEvent.click(getByAltText(/buscar/i));

      expect(onClick).toHaveBeenCalled();
    });
  });

  it('changes internal value', () => {
    const { container } = render(<JInput type="text" internalValue="Jüssi" />);
    const input = container.querySelector('.j-input__input');

    expect(input.value).toBe('Jüssi');
  });

  it('fire event when input text changed', () => {
    const onClick = jest.fn();
    const { getByPlaceholderText } = render(
      <JInput type="text" placeholder="Buscar" valueChange={onClick} />
    );

    fireEvent.change(getByPlaceholderText(/Buscar/i), {
      target: { value: 'Jüssi' },
    });

    expect(onClick).toHaveBeenCalled();
  });

  it('renders classes', () => {
    const { container } = render(<JInput classes="search-input" type="text" />);
    const input = container.querySelector('.j-input__input');

    expect(input.classList).toContain('search-input');
  });
});
