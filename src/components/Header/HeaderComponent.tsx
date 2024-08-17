import React from 'react';
import Link from "next/link";
import styles from './Header.module.css'
import page from "@/app/movies/page";
import {ThemeSwitcher} from "@/components/Header/ThemeSwitcher/ThemeSwitcher";

const HeaderComponent = () => {
    return (
        <div>
            <nav className={styles.header}>
                {/*<Link href={'/movies?page=4'}>Home page</Link>*/}
                <Link href={'/'}>Movies</Link> {/*todo something*/}
                <Link href={'/genres'}>Genres</Link>
                <Link href={'/movieInfo'}>Movie Info</Link>
                <Link href={'/search'}>Search</Link>
            </nav>
            <ThemeSwitcher/>
        </div>
    );
};

export default HeaderComponent;