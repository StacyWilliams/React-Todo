import React from "react";


class TodoForm extends React.Component {
 constructor(props) {
 super(props);
  this.state = {
   todoInput: ""
 };
 }


 handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
 };


 submitItem = e => {
    this.setState({ todoInput: "" });
      this.props.addTodo(e, this.state.todoInput);
 };


 render() {
  return (
    <div >
       <form className="todoForm" onSubmit={this.submitItem}>
        <input
        type="text"
        name="todoInput"
        onChange={this.handleChanges}
        value={this.state.todoInput}
        />

      <button class ='submit'>Add Todo</button>

      </form>

        <button class='clear' onClick={this.props.clearCompleted}>Clear Completed</button>
     </div>
  );
 }
}


export default TodoForm;