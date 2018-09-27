import React from 'react';

import classes from './NavigatinItems.css';
import NavigationItem from './NavigatinItem/NavigationItem';

const navigatinItems = () => (
    <ul className={classes.NavigatinItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigatinItems;