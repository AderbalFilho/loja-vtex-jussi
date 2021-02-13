import React from 'react';
import TestRenderer from 'react-test-renderer';
// import { render } from '@testing-library/react';

import JInput from './JInput';

describe('JInput', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<JInput />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
