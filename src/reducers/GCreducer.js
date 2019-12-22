const GCreducer = (state = [], action) => {
	switch (action.type) {
		case 'GC':
			return [
			
			]
		// case 'TOGGLE_TODO':
		// 	return state.map(todo =>
		// 		(todo.id === action.id)
		// 			? { ...todo, completed: !todo.completed }
		// 			: todo
		// 	)
		default:
			return state
	}
}

export default GCreducer
