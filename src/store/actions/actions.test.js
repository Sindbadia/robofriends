import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
} from './actionTypes'

import { setSearchField, requestRobots } from './index'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk])

describe('setSearchField', () => {
	it('should create an actions to search robots', () => {
		const text = 'wooo'
		const expectedAction = {
			type: CHANGE_SEARCH_FIELD,
			payload: text,
		}

		expect(setSearchField(text)).toEqual(expectedAction)
	})
})

describe('requestRobots', () => {
	const store = mockStore()
	store.dispatch(requestRobots())
	const action = store.getActions()

	const expectedAction = {
		type: REQUEST_ROBOTS_PENDING,
	}

	it('should handles requesting robots API', () => {
		expect(...action).toEqual(expectedAction)
	})
})
