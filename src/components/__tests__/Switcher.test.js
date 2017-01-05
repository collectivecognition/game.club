import React from 'react';
import render from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import { Switcher } from '../Switcher';

jest.mock('api');

describe('Switcher', () => {
  it('should render initially', () => {
    const component = render.create(<Switcher games={[]}/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should update searchTerm', () => {
    const component = mount(<Switcher games={[]}/>)
    const input = component.find('input')
    input.get(0).value = 'Zelda'
    input.simulate('change')
    expect(component.instance().searchTerm).toBe('Zelda')
  })

  it('should call onClick', () => {
    const component = mount(<Switcher games={[]} dispatch={jest.fn()}/>)
    const button = component.find('button')
    component.instance().onClick = jest.fn()
    button.click()
    expect(component.instance().onClick).toBeCalled()
  })
});