import React from 'react';
import TestRenderer from 'react-test-renderer';

import AboutJussi from './AboutJussi';

describe('AboutJussi', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<AboutJussi />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
