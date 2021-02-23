import React, { Component } from 'react'
import './MainPage.css'

import Header from '../Header/Header'
import CardList from '../Card/CardList'
import SearchBox from '../SearchBox/SearchBox'
import Scroll from '../Scroll/Scroll'
import ErrorBoundary from '../../hoc/ErrorBoundary'

class MainPage extends Component {
	componentDidMount() {
		this.props.onRequestRobots()
	}

	filterRobots = () => {
		return this.props.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
		})
	}

	render() {
		return this.props.isPending ? (
			<h1>Loading</h1>
		) : (
			<div className='tc'>
				<Header />
				<SearchBox searchChange={this.props.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={this.filterRobots()} />
					</ErrorBoundary>
				</Scroll>
			</div>
		)
	}
}

export default MainPage
