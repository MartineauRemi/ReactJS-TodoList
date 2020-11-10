import React from "react"


const Todo = ({todo, id, todos, setTodos}) => {
    const completedTodoHandler = () => {
        setTodos(todos.filter(elt => elt.id !== id));
    }

    return (
        <li><div className="checkbox" id={id} onClick={completedTodoHandler}></div>{todo}</li>
    )
};

export default Todo;