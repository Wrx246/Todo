import React from 'react';
import styles from './Footer.module.css';

let Footer = () => {
    return (
        <div className={styles.footer_body}>
            <div>
                <label htmlFor={""}>
                    <input
                        type="checkbox"
                        value=""
                        aria-label="..."/>
                    <span className={styles.checkAll}>ALL</span>
                </label>
            </div>
            <div>
                <span className={styles.todo_count}>Active todo 0</span>
            </div>
            <div>
                <button className={styles.delete_button} type="button">Delete</button>
            </div>
        </div>
    )
}

export default Footer;