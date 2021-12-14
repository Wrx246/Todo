import React, {useContext, useState} from 'react';
import styles from './Input.module.css';
import {TodoContext} from "../../TodoData";

let Input = (props) => {
    const [ todos, setTodos ] = useContext(TodoContext);
    const [ todoName, setTodoName ] = useState("");

    let addTodo = e => {
        e.preventDefault();
        setTodos([ ...todos, {name: todoName, complete: false} ]);
        setTodoName('');
    }

    return (
        <div className={styles.input_wrapper}>
            <input
                className={styles.input_body}
                type={'text'}
                placeholder={"Enter your todo..."}
                value={todoName}
                onChange={ e => setTodoName(e.target.value.toLowerCase())}/>
            <button
                disabled={todoName === ''}
                onClick={addTodo}
                className={styles.input_button}>Create</button>
        </div>
    )
}

export default Input;