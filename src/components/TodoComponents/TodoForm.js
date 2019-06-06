import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTodo: ''
        }
        
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
            
            
            <button>Submit</button>
            
          </form>
            
            <button>Clear Completed</button>
            </div>
    )
}

}
export default TodoForm;