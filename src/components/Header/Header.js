import React, { Fragment, Component } from 'react'
import CounterButton from '../CounterButton/CounterButton'

class Header extends Component {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return false
	// }

	render() {
		console.log('[Header]')
		return (
			<Fragment>
				<h1 className='f1'>RoboFriends</h1>
				<CounterButton color={'red'} />
			</Fragment>
		)
	}
}

export default Header
