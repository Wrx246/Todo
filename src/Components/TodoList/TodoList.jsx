import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from "./TodoItem/TodoItem";

let TodoList = () => {
    return (
        <div className={styles.todos_body}>
            <ul className={styles.list_group}>
                <TodoItem />
            </ul>
        </div>
    )
}

export default TodoList;