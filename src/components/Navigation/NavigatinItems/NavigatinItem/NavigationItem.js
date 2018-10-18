import React from 'react';
import { NavLink} from 'react-router-dom';

import classes from './NavigatinItem.css';

const navigationItem = (props) => (
    <li className={classes.NavigatinItem}>
        <NavLink
            to={props.link}
            exact
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);

export default navigationItem;