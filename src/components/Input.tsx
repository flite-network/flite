import React from 'react';
import styles from './Input.module.scss';

const Input = (props) => {
    return (
        <input className={styles.input} placeholder={props.placeholder}>{props.default}</input>
    );
}

export default Input;