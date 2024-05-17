import React from "react";
import TodoItem from "./TodoItem";

function TodoList({tasks}){
    return(
        <ul>
            {tasks.map((task, index)=>(
                <TodoItem task={task}/>
            ))}
        </ul>
    )
}

export default TodoList