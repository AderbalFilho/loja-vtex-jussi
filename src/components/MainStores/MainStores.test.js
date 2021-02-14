import React from 'react';
import TestRenderer from 'react-test-renderer';

import MainStores from './MainStores';

describe('MainStores', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<MainStores />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
