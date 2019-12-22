
const initialState = {
	count: 42
};
// export default function reducer(state = initialState, action) {
//         return state;
// }

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'INCREMENT':
			console.log('INCREMENT')
			return {
				count: state.count + 1
			};
		case 'DECREMENT':
			console.log('DECREMENT')
			return {
				count: state.count - 1
			};
		default:
			console.log('default')

			return state;
	}
}
export default reducer;
