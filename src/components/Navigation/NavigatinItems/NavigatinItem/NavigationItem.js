import React from 'react';

import classes from './NavigatinItem.css';

const navigationItem = (props) => (
    <li className={classes.NavigatinItem}>
        <a href={props.link}
        className={props.active ? classes.active : null}>{props.children}</a>
    </li>
);

export default navigationItem;