import React from 'react';
import TestRenderer from 'react-test-renderer';

import TheNavbar from './TheNavbar';

describe('TheNavbar', () => {
  it('matches snapshot', () => {
    const links = [
      { url: '#', label: 'Nossas soluções' },
      { url: '#', label: 'Conheça a Jüssi' },
    ];
    const testRenderer = TestRenderer.create(<TheNavbar links={links} />);
    const jsonComponent = testRenderer.toJSON();

    expect(jsonComponent).toMatchSnapshot();
  });
});
