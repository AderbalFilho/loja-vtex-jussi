import React from 'react';
import TestRenderer from 'react-test-renderer';

import TheHeader from './TheHeader';

describe('The Header', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<TheHeader />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
