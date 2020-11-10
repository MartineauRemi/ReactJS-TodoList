import React, {useState} from "react"

const Form = ({todos, setTodos}) => {
    const [todo, setTodo] = useState("");
    const [showInput, setShowInput] = useState(true);

    const onCancelInputHandler = (e) => {
        setTodo("");
        e.preventDefault();
        setShowInput(!showInput);
    }

    const onAddInputHandler = (e) => {
        e.preventDefault();
        setShowInput(!showInput);
    }

    const onChangeHandler = (e) => {
        setTodo(e.target.value);
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        if(e.target.value !== ""){
            const id = Math.random() * 1000 + 1;
            setTodos([...todos, {todo: todo, key: id, id: id}]);
            setTodo("");
        }
        setShowInput(!showInput);
    }
    
    return (
        <div id="formContainer">
            {showInput ? 
                <button id="addBtn" onClick={onAddInputHandler}> + Ajouter une tâche</button> :
                (<form onSubmit={onSubmitHandler}>
                    <input className="todoInput" type="text" autoComplete="off" autoFocus="on" placeholder="Que voulez-vous accomplir ?" onChange={onChangeHandler} value={todo}/>
                    <div className ="buttons">
                        <input type="submit" value="Ajouter" />
                        <button id="cancelBtn" onClick={onCancelInputHandler}>Annuler</button>
                    </div>
                </form>
                )} 
        </div>
    )
};

export default Form;