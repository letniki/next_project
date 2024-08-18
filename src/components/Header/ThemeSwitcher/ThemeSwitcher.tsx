'use client'
import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "@/hooks/reduxHooks";
import {changeTheme} from "@/redux/slices/themeSlice";
import styles from './ThemeSwitcher.module.css'

const ThemeSwitcher : FC = () => {


    const theme : boolean =useAppSelector(state => state.theme.theme);
    const dispatch = useAppDispatch();
    useEffect(() => {
        document.body.className = (theme ? 'body-dark' : 'body-light');
    }, [theme]);
    return (
        <div>

            <div className={styles.container}>
                <input type="checkbox" id={styles.toggleButton} className={styles.toggleButton} onChange={()=>{
                    dispatch(changeTheme());
                    console.log(theme);
                }}/>
            </div>
        </div>
    );
};

export {ThemeSwitcher};