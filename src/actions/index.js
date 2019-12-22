// export * from './todoActions';
let nextTodoId = 0
let doc = "9989"
export const addTodo = data => (
	{
		type: 'ADD_TODO',
		id: nextTodoId++,
		text: data.title,
		doc: data.body,
		user: { user: "Test User", age: 25 },

	}
	// console.log("data action",data)
)

export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
})
let nextmun = 100000000

export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id,
})


export const GC = id => ({
	type: 'GC',
	id,
	text: 'Build my first Redux app'
})

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE',
	// GC: 'GC'
}
