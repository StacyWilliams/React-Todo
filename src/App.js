import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
  constructor(props) {
   super(props);
   this.state= {todosArray:[]}
    
   
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