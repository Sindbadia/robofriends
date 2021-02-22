import { shallow } from 'enzyme'
import React from 'react'
import { create } from 'react-test-renderer'

import Card from './Card'

it('should render Card component', () => {
	expect(create(<Card />)).toMatchSnapshot()
})
