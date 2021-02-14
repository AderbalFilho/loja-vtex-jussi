import React from 'react';
import TestRenderer from 'react-test-renderer';

import OurSolutions from './OurSolutions';
import { SOLUTIONS } from '@constants';

describe('OurSolutions', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(
      <OurSolutions solutions={SOLUTIONS} />
    );
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
