import React, {useContext} from 'react';
import styles from './TodoList.module.css';
import TodoItem from "./TodoItem/TodoItem";
import {TodoContext} from "../../TodoData";

let TodoList = (props) => {
    const [ todos, setTodos ] = useContext(TodoContext);

    let checkComplete = id => {
        let newTodos = [...todos];
        newTodos.forEach( (todo, index) => {
            if ( id === index ) {
                todo.complete = !todo.complete
            }
        });
        setTodos(newTodos);
    }

    let onEditValue = (editvalue, id) => {
        const newTodos = [...todos];
        newTodos.forEach( (todo, index) => {
            if ( id === index ) {
                todo.name = editvalue
            }
        });
        setTodos(newTodos);
    }

    return (
        <div className={styles.todos_body}>
            <ul className={styles.list_group}>
                {
                    todos.map( (todo, index) => (
                        <TodoItem
                            todo={todo}
                            key={index}
                            id={index}
                            checkComplete={checkComplete}
                            onEditValue={onEditValue}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;