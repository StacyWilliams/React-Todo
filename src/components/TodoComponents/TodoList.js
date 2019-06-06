
import React from 'react';
import Todo from "./Todo";

const TodoList = props => {
    console.log(props)
   return (
    <div className='todoList'>
    {props.todosArray.map(todo => <Todo key={todo.id} todo={todo}  toggleTodo={props.toggleTodo}/>)}
            
       
           </div>
   )
};

export default TodoList;