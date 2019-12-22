import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
	let input
	let input_Doc
	// let data
	// let data = {
	//         "Title": input,
	//         "body": input_Doc
	// }
	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				// dispatch(addTodo(input.value))
				// input.value = ''
				// dispatch(addTodo("{Title: input,body: input_Doc}"))
				// data = {title: input,body: input_Doc}
				dispatch(addTodo({ title: input.value, body: input_Doc.value }))
				input.value = '' ///清空
				input_Doc.value = '' ///清空
			}}>
				<input placeholder="標題" ref={node => input = node} />
				<input placeholder="內文" ref={node => input_Doc = node} />
				<button type="submit">
					Add Todo
        </button>
			</form>
		</div>
	)
}

export default connect()(AddTodo)
