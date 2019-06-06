import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTodo: ''
        }
        
    };

    toggleItem = itemId => {
      this.setState({
      todosArray: this.state.todosArray.map(item => {
      if (itemId === item.id) {
      return { ...item, completed: !item.completed };
      }
      return item;
      })
      });
      };

      submit =(e) =>{
        e.preventDefault()
        this.props.addTodo(e, this.state.inputTodo)
        this.setState({inputTodo: ''})
    }

    changeHandler = e => {
        e.preventDefault()
        this.setState({
        [e.target.name]: e.target.value
      })
      };

    render(){
      console.log('todoFormProps', this.props)
    return (
        <div>
        <form className='form' onSubmit={this.submit}>
            <input
             type='text' 
             name='inputTodo' 
             placeholder='Todo Input' 
             value={this.state.inputTodo}
             onChange={this.changeHandler}
            />
            
          <div>  
            
            <button class='submit'>Submit</button>
            </div>
            </form>
          
            
            <div>
            <button class= 'clear'>Clear Completed</button>
            </div>
            </div>
            
    )
}

}
export default TodoForm;