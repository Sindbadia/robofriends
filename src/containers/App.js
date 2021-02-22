import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

import Header from '../components/Header/Header'
import CardList from '../components/Card/CardList'
import SearchBox from '../components/SearchBox/SearchBox'
import Scroll from '../components/Scroll/Scroll'
import ErrorBoundary from '../hoc/ErrorBoundary'

import { setSearchField, requestRobots } from '../store/actions'

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots()
	}

	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})

		return isPending ? (
			<h1>Loading</h1>
		) : (
			<div className='tc'>
				<Header />
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	searchField: state.searchRobotsReducer.searchField,
	robots: state.requestRobotsReducer.robots,
	isPending: state.requestRobotsReducer.isPending,
	error: state.requestRobotsReducer.error,
})

const mapDispatchToProps = dispatch => ({
	onSearchChange: event => dispatch(setSearchField(event.target.value)),
	onRequestRobots: () => dispatch(requestRobots()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
