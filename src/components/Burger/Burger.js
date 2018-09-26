import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from'./BurgerIngedient/BurgerIngredient';

const burger = (props) => {
    let transformtIngedients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if(transformtIngedients.length === 0) {
        transformtIngedients = <p>Please start adding ingredients!</p>
    }
     return (
         <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
             {transformtIngedients}
             <BurgerIngredient type="bread-bottom"/>
         </div>
     );
};

export default burger;