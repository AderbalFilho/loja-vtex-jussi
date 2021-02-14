import React from 'react';
import TestRenderer from 'react-test-renderer';

import ContactUs from './ContactUs';

describe('ContactUs', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<ContactUs />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
