import React from 'react';
import styles from './Navbar.module.scss'

export default class Navbar extends React.Component {
    render() {
      return <header className={styles.header}>
            <h1 className={styles.title}>FLITE</h1>
      </header>;
    }
}