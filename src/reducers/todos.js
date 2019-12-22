const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					doc: action.doc,
					user: action.user,
					completed: false,
					mun: 999,
				}
			]
		case 'TOGGLE_TODO':
			return state.map(todo =>
				(todo.id === action.id)
					? { ...todo, completed: !todo.completed }
					: todo
			)
		case 'GC':
			return [

			]
		default:
			return state
	}
}

export default todos
