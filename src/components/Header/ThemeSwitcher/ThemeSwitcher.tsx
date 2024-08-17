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
                <button onClick={() => {
                    dispatch(changeTheme());
                    console.log(theme);
                }}>Change to {theme ? 'body-dark' : 'body-light'} Theme
                </button>
        </div>
    );
};

export {ThemeSwitcher};