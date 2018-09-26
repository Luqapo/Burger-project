import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredinetsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                    </li>
            );
        });
    return (
        <Aux>
            <h3>Yoour Order</h3>
            <p>Adelicious burger with the following ingredients</p>
            <ul>
            {ingredinetsSummary}
            </ul>
            <p>Contiue to checkout?</p>
        </Aux>
    )
};

export default orderSummary;