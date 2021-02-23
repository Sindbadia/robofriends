import React from 'react'
import { create } from 'react-test-renderer'

import CardList from './CardList'

it('should render Card component', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'John Snow',
			username: 'JohnJohn',
			email: 'john@gmail.com',
		},
	]
	expect(create(<CardList robots={mockRobots} />)).toMatchSnapshot()
})
