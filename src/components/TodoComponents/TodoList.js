
import React from "react";
import TodoItem from "./Todo";


const TodoList = props => {
        const sortedList = props.todosArray.sort((a, b) => a.completed - b.completed);
     return (
        <div className="todoList">
            {sortedList.map(item => (
            <TodoItem key={item.id} item={item} toggleItem={props.toggleItem} />
         ))}
       </div>
        );
    };

    
export default TodoList;