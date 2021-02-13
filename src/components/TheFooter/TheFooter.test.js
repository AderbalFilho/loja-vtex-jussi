import React from 'react';
import TestRenderer from 'react-test-renderer';

import TheFooter from './TheFooter';

describe('The Header', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<TheFooter />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
