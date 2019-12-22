import React from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

class Counter extends React.Component {
	// state = { count: 0 }

	increment = () => {
		// this.setState({
		//   count: this.state.count + 1
		// });
		this.props.dispatch({ type: 'INCREMENT' });

	}

	decrement = () => {
		// this.setState({
		//   count: this.state.count - 1
		// });
		this.props.dispatch({ type: 'DECREMENT' });

	}

	render() {
		return (
			<div>
				<h2>Counter</h2>
				<div>
					<button onClick={this.decrement}>-</button>
					{/* <span>{this.state.count}</span> */}
					<span>{this.props.count}</span>

					<button onClick={this.increment}>+</button>
				</div>
			</div>
		)
	}
}
// Add this function:
function mapStateToProps(state) {
	return {
		count: state.count
	};
}

// Then replace this:
// export default Counter;

// With this:
// export default connect(mapStateToProps)(Counter);
const Concounter = connect(mapStateToProps)(Counter);

const initialState = {
	count: 0
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + 1
			};
		case 'DECREMENT':
			return {
				count: state.count - 1
			};
		default:
			return state;
	}
}
const store = createStore(reducer);
 const ALL = () => (
  <Provider store={store}>
    <Concounter/>
  </Provider>
);

export default ALL