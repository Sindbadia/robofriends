import {
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
} from '../actions/actionTypes'
import { CHANGE_SEARCH_FIELD } from '../actions/actionTypes'

import requestReducer from './requestRobots'
import searchReducer from './searchRobots'

describe('searchRobots', () => {
	const initialStateSearch = {
		searchField: '',
	}

	it('should return the initial state', () => {
		expect(searchReducer(undefined, {})).toEqual({
			searchField: '',
		})
	})

	it('should handle CHANGE_SEARCHFIELD', () => {
		expect(
			searchReducer(initialStateSearch, { type: CHANGE_SEARCH_FIELD, payload: 'abc' })
		).toEqual({
			searchField: 'abc',
		})
	})
})

describe('requestRobots', () => {
	const initialState = {
		isPending: false,
		robots: [],
		error: '',
	}

	it('should return the initial state', () => {
		expect(requestReducer(undefined, {})).toEqual(initialState)
	})

	it('should handle REQUEST_ROBOTS_PENDING', () => {
		expect(requestReducer(initialState, { type: REQUEST_ROBOTS_PENDING })).toEqual({
			...initialState,
			isPending: true,
		})
	})
	it('should handle REQUEST_ROBOTS_SUCCESS', () => {
		expect(
			requestReducer(initialState, {
				type: REQUEST_ROBOTS_SUCCESS,
				payload: [
					{
						id: '123',
						name: 'test',
						email: 'test@gmail.com',
					},
				],
			})
		).toEqual({
			...initialState,
			robots: [
				{
					id: '123',
					name: 'test',
					email: 'test@gmail.com',
				},
			],
			isPending: false,
		})
	})

	it('should handle REQUEST_ROBOTS_FAILED', () => {
		expect(
			requestReducer(initialState, {
				type: REQUEST_ROBOTS_FAILED,
				payload: 'Requesting robots failed',
			})
		).toEqual({
			...initialState,
			error: 'Requesting robots failed',
			isPending: false,
		})
	})
})
