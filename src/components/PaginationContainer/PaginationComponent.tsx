'use client'
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React, {FC, useState} from 'react';
import styles from "./PaginationComponent.module.css";

interface Props {
    page: number,
    pathname: string,
}

const PaginationComponent: FC<Props> = ({page, pathname}) => {


    return (
        <div>
        <div className={styles.pagination}>
            <button className={styles.button} disabled={page === 1}>
                <Link className={styles.Link} href={`/${pathname}?page=${page > 1 ? page - 1 : 1}`}>prev</Link>
            </button>
            <Link className={styles.buttonLink} href={`/${pathname}?page=${1}`}>{1}</Link>
            {/*<Link className={styles.buttonLink} href={`/${pathname}?page=${page > 2 ? +page -1 : 1}`}>{+page -1}</Link>*/}
            {page > 3 && <Link className={styles.buttonLink} href={`/${pathname}?page=${+page - 2}`}>{+page - 2}</Link>}
            {page > 2 && <Link className={styles.buttonLink} href={`/${pathname}?page=${+page - 1}`}>{+page - 1}</Link>}
            <Link className={styles.buttonLink}
                  href={`/${pathname}?page=${page < 1 ? 1 : +page + 1}`}>{+page + 1}</Link>
            <Link className={styles.buttonLink}
                  href={`/${pathname}?page=${page < 1 ? 1 : +page + 2}`}>{+page + 2}</Link>
            <Link className={styles.buttonLink}
                  href={`/${pathname}?page=${page < 1 ? 1 : +page + 3}`}>{+page + 3}</Link>
            <Link className={styles.buttonLink}
                  href={`/${pathname}?page=${page < 1 ? 1 : +page + 4}`}>{+page + 4}</Link>

            <button className={styles.button} disabled={page === 500}>
                <Link className={styles.Link} href={`/${pathname}?page=${page < 1 ? 1 : +page + 1}`}>next</Link>
            </button>
        </div>
            <h3 className={styles.h3}>You are on {page} page</h3>
        </div>
    );
};

export default PaginationComponent;