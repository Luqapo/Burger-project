import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ConatactData extends Component {
    state = {
        name: '',
        email: '',
        addres: {
            street: '',
            postalCode: ''
        }

    }

    orderHandler = () => {
        console.log('Order');
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                    <input className={classes.Input} type="postal" name="postal" placeholder="Your Postal" />
                    <input className={classes.Input} type="street" name="street" placeholder="Your Street" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ConatactData;