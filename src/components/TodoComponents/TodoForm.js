import React from 'react';

const TodoForm = props => {
    return (
        <form className='form' onSubmit={(e) => props.addTodo(e)}>
            <input
             type='text' 
             name='todoInput' 
             placeholder='Todo Input' 
             value={props.todoInput}
             onChange={e => props.changeHandler(e)} 
            />
            
            
            <button>Submit</button>
            <button>Clear Completed</button>
          </form>
    )
}

export default TodoForm;