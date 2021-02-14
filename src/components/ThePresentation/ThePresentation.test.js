import React from 'react';
import TestRenderer from 'react-test-renderer';

import ThePresentation from './ThePresentation';

describe('ThePresentation', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<ThePresentation />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
