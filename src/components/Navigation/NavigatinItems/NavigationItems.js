import React from 'react';

import classes from './NavigatinItems.css';
import NavigationItem from './NavigatinItem/NavigationItem';

const navigatinItems = () => (
    <ul className={classes.NavigatinItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default navigatinItems;