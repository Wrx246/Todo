import React from 'react';
import styles from './TodoItem.module.css';

let TodoItem = () => {
    return (
        <div>
            <li className={styles.item_card}>
                <div>
                    <label htmlFor={""}>
                        <input
                            type="checkbox"
                            value=""
                            aria-label="..."/>
                        <span className={styles.item_body}>Read book</span>
                    </label>
                </div>
                <button className={styles.item_button} type="button">Edit</button>
            </li>
        </div>
    )
}

export default TodoItem;