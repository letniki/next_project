import React from 'react';
import Link from "next/link";
import styles from './Header.module.css'
import page from "@/app/movies/page";
import {ThemeSwitcher} from "@/components/Header/ThemeSwitcher/ThemeSwitcher";

const HeaderComponent = () => {
    return (

            <nav className={styles.header}>
               <Link href={'https://github.com/letniki'}> <img src="/github.png" alt="github"/></Link>
                {/*<Link href={'/movies?page=4'}>Home page</Link>*/}
                <Link className={styles.Link} href={'/'}>Movies</Link> {/*todo something*/}
                <Link className={styles.Link} href={'/genres'}>Genres</Link>
                <Link className={styles.Link} href={'/search'}>Search</Link>
                <ThemeSwitcher />
                <Link href={'https://github.com/letniki'}> <img src="/image.png" alt="icon" className={styles.image}/></Link>

            </nav>

);
};

export default HeaderComponent;