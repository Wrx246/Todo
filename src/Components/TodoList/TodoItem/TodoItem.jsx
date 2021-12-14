import React, {useState} from 'react';
import styles from './TodoItem.module.css';

let TodoItem = ({todo, id, checkComplete, onEditValue}) => {
    const [ onEdit, setOnEdit ] = useState(false);
    const [ editValue, setEditValue ] = useState(todo.name);


    let onEditButton = () => {
        setOnEdit(true);
    }

    let onSaveButton = id => {
        setOnEdit(false)
        if (editValue) {
            onEditValue( editValue, id )
        } else {
            setEditValue(todo.name)
        }
    }

    if(onEdit) {
        return (
            <div>
                <li className={styles.item_card}>
                    <div>
                            <input
                                id={id}
                                type="text"
                                value={editValue}
                                onChange={ e => setEditValue(e.target.value.toLowerCase())}/>
                    </div>
                    <button
                        onClick={ () => onSaveButton(id)}
                        disabled={editValue === ""}
                        className={styles.item_button}
                        type="button">Save</button>
                </li>
            </div>
        )
    } else {
        return (
            <div>
                <li className={styles.item_card}>
                    <div>
                        <label htmlFor={""}>
                            <input
                                id={id}
                                type="checkbox"
                                value=""
                                aria-label="..."
                                checked={todo.complete}
                                onChange={ () => checkComplete(id)}/>
                            <span className={todo.complete ? styles.item_complete : styles.item_body}>{todo.name}</span>
                        </label>
                    </div>
                    <button
                        onClick={onEditButton}
                        disabled={todo.complete}
                        className={styles.item_button}
                        type="button">Edit</button>
                </li>
            </div>
        )
    }


}

export default TodoItem;