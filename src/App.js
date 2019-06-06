import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todosArray = [
  {
    task:'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'DO THE THING',
    id: 15288170,
    completed: false
  },
  {
    task: 'Do the other thing',
    id: 152858,
    completed: false
  }
 ];

class App extends React.Component {
  constructor(props) {
   super(props);
   this.state= {todosArray}
   
    
   
   };
  
  

    addTodo = (e, item)=> {
     
      console.log('itemProps', item)
     
      const newTodo = {
        task: item,
        id: Date.now(),
        completed: false

      }
      this.setState({
        todosArray: [...this.state.todosArray, newTodo],
        todoInput: ''
  
  
        });
      };

       
  render() {
    console.log('todoList')
    return (
      <div>
        <h2 class='header'>Stacy's Todo List!</h2>
        <TodoList todosArray={this.state.todosArray} />
        <TodoForm  addTodo={this.addTodo} />
      </div>
    );
  };
  
}

export default App;