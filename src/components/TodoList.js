import React from "react"
import Todo from "./Todo"

const TodoList = ({todos, setTodos}) => {
    
    return (
        <ul>
            {todos.map(elt => <Todo todo={elt.todo} key={elt.id} id={elt.id} todos={todos} setTodos={setTodos}/>)}
        </ul>
    ) 
};

export default TodoList;