import React from 'react';
import Link from "next/link";
import styles from './Header.module.css'
const HeaderComponent = () => {
    return (
        <div>
            <div className={styles.header}>
                <Link href={'/'}>Home page</Link>
                <Link href={'/movies'}>Movies</Link>
                <Link href={'/movieInfo'}>Movie Info</Link>
            </div>
        </div>
    );
};

export default HeaderComponent;