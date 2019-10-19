import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todosArray = [
 

];


class App extends React.Component {
   constructor() {
   super();
    this.state = {
     todosArray
     
      };
     }

 addTodo = (e, item) => {
   e.preventDefault();
    const newTodoItem = {
     task: item,
     id: Date.now(),
     completed: false
 };

    this.setState({
    todosArray: [...this.state.todosArray, newTodoItem]
 });

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

 clearCompleted = e => {
    this.setState({
     todosArray: this.state.todosArray.filter(item => !item.completed)
  });
 };

 
 render() {
  return (
   <div class='container'>
     <h2 class='header'>Stacy's Todo App!</h2>
     
     <TodoList todosArray={this.state.todosArray} toggleItem={this.toggleItem} />
     <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
   </div>
 );
 }
}
export default App;