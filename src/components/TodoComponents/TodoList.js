
import React from 'react';
import Todo from "./Todo";

const TodoList = props => {
    console.log(props)
   return (
    <div className='todoList'>
    {props.todosArray.map(todo => <Todo todo={todo}/>)}
            
        {/* //    return <Todo todo={todo}/> */}
           </div>
   )
};

export default TodoList;