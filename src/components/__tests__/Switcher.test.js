import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow, mount } from 'enzyme'

import { Switcher } from '../Switcher'

describe('Switcher', () => {
  it('should render initially', () => {
    const component = shallow(<Switcher games={[]}/>)
    const tree = toJSON(component)
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
    component.instance().onClick()
    expect(component.props().dispatch).toBeCalled();
  })

  it('should render results', () => {
    const component = mount(<Switcher games={[{name: 'Halo'}, {name: 'Zelda'}]}/>)
    const tree = toJSON(component.find('ul'))
    expect(tree).toMatchSnapshot()
  })
});