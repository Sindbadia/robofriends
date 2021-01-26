import React, { Fragment, PureComponent } from 'react'

class CounterButton extends PureComponent {
	state = {
		count: 0,
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	if (this.state.count !== nextState.count) {
	// 		return true
	// 	}
	// 	return false
	// }

	updateCount = () => {
		this.setState(prevState => ({ count: prevState.count + 1 }))
	}

	render() {
		console.log('[CounterButton]')
		return (
			<Fragment>
				<button color={this.props.color} onClick={this.updateCount}>
					Count: {this.state.count}
				</button>
			</Fragment>
		)
	}
}

export default CounterButton
