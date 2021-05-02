import React from 'react';
import styles from './Sidebar.module.scss';
import Topic from './Topic';

export default class Navbar extends React.Component {
    render() {
      return (
        <div className={styles.sidebar}>
            <Topic name="topic1" />
            <Topic name="topic2" />
            <Topic name="topic3" />
        </div>
      );
    }
}