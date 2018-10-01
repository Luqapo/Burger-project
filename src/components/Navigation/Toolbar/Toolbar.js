import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigatinItems from '../NavigatinItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <Logo height="80%"/>
        <nav className={classes.DesktopOnly}>
            <NavigatinItems/>
        </nav>
    </header>
);

export default toolbar;