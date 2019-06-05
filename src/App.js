import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
   state= {
   todos: [
          {
        task: '',
        id: Date.now(),
        completed: false
      },
      
    ],
    todoInput: ''
   };
  
   changeHandler = e => {
      e.preventDefault()
      this.setState({
      [e.target.name]: e.target.value
    })
    };

    addTodo = e => {
      e.preventDefault();
      const newTodo = {
        task: this.state.todoInput,
        id: Date.now(),
        completed: false
      };
    }
      this.setState({
      task: [...this.state.todos, newTodo],
      todoInput: ''
}
);
   
  
  render() {
    return (
      <div>
        <h2>Stacy's Todo List!</h2>
        <TodoList todo={this.state.todos} />
        <TodoForm todoInput={this.state.todoInput} changeHandler={this.changeHandler} addTodo={this.state.addTodo} />
      </div>
    );
  }
};
}

export default App;