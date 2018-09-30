import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigatinItems from '../NavigatinItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo height="80%"/>
        <nav className={classes.DesktopOnly}>
            <NavigatinItems/>
        </nav>
    </header>
);

export default toolbar;