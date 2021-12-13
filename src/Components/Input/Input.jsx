import React from 'react';
import styles from './Input.module.css';

let Input = () => {
    return (
        <div className={styles.input_wrapper}>
            <input
                className={styles.input_body}
                type={'text'}
                placeholder={"Enter your todo..."}/>
            <button className={styles.input_button}>Create</button>
        </div>
    )
}

export default Input;