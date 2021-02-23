import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

import MainPage from '../components/MainPage/MainPage'

import { setSearchField, requestRobots } from '../store/actions'

class App extends Component {
	render() {
		return <MainPage {...this.props} />
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
