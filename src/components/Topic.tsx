import React from 'react';
import styles from './Topic.module.scss';

const Topic = (props) => {
    return (
        <button className={styles.topic}>
            {props.name}
        </button>
    );
}

export default Topic;