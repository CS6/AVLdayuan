import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const BookToDoList = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <h1>FUCK DATA</h1>
  </div>
)

export default BookToDoList
