import { shallow } from 'enzyme'
import React from 'react'
import { create } from 'react-test-renderer'

import MainPage from './MainPage'

let wrapper
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false,
	}
	wrapper = create(<MainPage {...mockProps} />)
})

it('should renders MainPage without crashing', () => {
	expect(wrapper).toMatchSnapshot()
})

it('should filters robots correctly', () => {
	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [
			{
				id: '3',
				name: 'John',
				email: 'john@gmail.com',
			},
		],
		searchField: 'john',
		isPending: false,
	}
	const wrapper2 = shallow(<MainPage {...mockProps2} />)

	// expect(wrapper.instance().filterRobots()).toEqual([])
	expect(wrapper2.instance().filterRobots()).toEqual([
		{
			id: '3',
			name: 'John',
			email: 'john@gmail.com',
		},
	])
})

it('should filters robots correctly 2', () => {
	const mockProps3 = {
		onRequestRobots: jest.fn(),
		robots: [
			{
				id: '3',
				name: 'John',
				email: 'john@gmail.com',
			},
		],
		searchField: 'a',
		isPending: false,
	}
	const filteredRobots = []
	const wrapper3 = shallow(<MainPage {...mockProps3} />)
	// expect(wrapper.instance().filterRobots()).toEqual([])
	expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots)
})
