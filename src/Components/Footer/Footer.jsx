import React, {useContext, useState} from 'react';
import styles from './Footer.module.css';
import {TodoContext} from "../../TodoData";

let Footer = (props) => {
    const [ todos, setTodos ] = useContext(TodoContext);
    const [ checkAll, setCheckAll ] = useState(false);

    let onCompleteAll = () => {
        const newTodos = [...todos];
        newTodos.forEach( todo => {
            todo.complete = !checkAll;
        });
        setTodos(newTodos);
        setCheckAll(!checkAll);
    }

    let onDeleteButton = () => {
        const newTodos = todos.filter( todo => {
            return todo.complete === false
        });
        setTodos(newTodos);
        setCheckAll(false);
    }

    return (
        <div className={styles.footer_body}>
            <div>
                <label htmlFor={""}>
                    <input
                        type="checkbox"
                        value=""
                        aria-label="..."
                        checked={checkAll}
                        onClick={onCompleteAll}/>
                    <span className={styles.checkAll}>ALL</span>
                </label>
            </div>
            <div>
                <span className={styles.todo_count}>Active todo {todos.filter( todo => todo.complete === false).length}</span>
            </div>
            <div>
                <button
                    disabled={ todos.length === 0 }
                    onClick={onDeleteButton}
                    className={styles.delete_button}
                    type="button">Delete</button>
            </div>
        </div>
    )
}

export default Footer;