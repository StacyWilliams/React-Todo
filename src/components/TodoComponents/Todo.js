import React from 'react';



const Todo = props => {
    console.log('todoProps',props)
    return(
    
        <div>
           
        <p>{props.todo.task}</p>
    </div>
    )
}
export default Todo;