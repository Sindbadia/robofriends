import React, { Fragment, PureComponent } from 'react'

class CounterButton extends PureComponent {
	state = {
		count: 0,
	}

	updateCount = () => {
		this.setState(prevState => ({ count: prevState.count + 1 }))
	}

	render() {
		return (
			<Fragment>
				<button id='counter' color={this.props.color} onClick={this.updateCount}>
					Count: {this.state.count}
				</button>
			</Fragment>
		)
	}
}

export default CounterButton
