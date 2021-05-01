import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default class Navbar extends React.Component {
    render() {
      return <header className={styles.header}>
        <Link href="/">
          <h1 className={styles.title}>FLITE</h1>
        </Link>

        <div className={styles.right}>
          <Link href="/login">
            <svg xmlns='http://www.w3.org/2000/svg' width='2.5em' height='2.5em' fill='currentColor' viewBox='0 0 16 16'>
              <path d='M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z'></path>
              <path fill-rule='evenodd' d='M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'></path>
              <path fill-rule='evenodd' d='M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z'></path>
            </svg>
          </Link>
        </div>
      </header>;
    }
}