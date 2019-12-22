import React from 'react'
import PropTypes from 'prop-types'
import { Button, List, WhiteSpace, WingBlank } from 'antd-mobile';

const Todo = ({ onClick, completed, text, doc, mun ,user}) => (
	<List.Item
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
		extra={
			<Button onClick={onClick} activeStyle={{ backgroundColor: 'red' }} type={completed ? 'ghost' : 'primary'} size="small" inline>small</Button>
		}
		multipleLine
	>
		{console.log("text",text)}
		{text}
		<h1>{mun}</h1>
		<List.Item.Brief >
			{doc}
			Can be collected, refund, discount management, view data and other operations
      </List.Item.Brief>
			{user.user}			{user.age}
	</List.Item>
	// <div style={{
	// 	backgroundColor: completed ? '#AAA' : '#EEE',
	// 	borderRadius:5,
	// 	borderColor:"#234567",
	// 	outlineColor:'#234567',
	// 	borderBlockColor:'#234567',
	// 	color: completed ? '#EEE' : '#111',
	// 	borderWidth:0.5,
	// 	// height:20,
	// 	// borderBottom: "solid rgb(212, 212, 212)",
	// 	border: " solid #234567",
	// 	display:"flex",
	// 	flex:1,
	// }}>
	// 	<h3
	// 		onClick={onClick}
	// 		style={{
	// 			textDecoration: completed ? 'line-through' : 'none'
	// 		}}>
	// 		{text}
	// 	</h3>
	// </div>
)

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo
