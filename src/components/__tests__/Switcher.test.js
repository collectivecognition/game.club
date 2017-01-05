import React from 'react';
import Render from 'react-test-renderer';

import Switcher from '../Switcher';

describe('Switcher', () => {
  it('should render', () => {
    const component = Render.create(<Switcher />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});