import React from 'react';
import TestRenderer from 'react-test-renderer';

import RegisterLead from './RegisterLead';

describe('RegisterLead', () => {
  it('matches snapshot', () => {
    const testRenderer = TestRenderer.create(<RegisterLead />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
