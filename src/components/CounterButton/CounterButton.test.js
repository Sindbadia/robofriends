import { shallow } from 'enzyme'
import React from 'react'
import { create } from 'react-test-renderer'

import CounterButton from './CounterButton'

it('should render Card component', () => {
	const mockColor = 'red'

	expect(create(<CounterButton color={mockColor} />)).toMatchSnapshot()
})

it('should correctly increments the counter', () => {
	const mockColor = 'red'
	const wrapper = shallow(<CounterButton color={mockColor} />)

	wrapper.find('[id="counter"]').simulate('click')
	expect(wrapper.state()).toEqual({ count: 1 })
	expect(wrapper.props().children.props.color).toEqual('red')
})
