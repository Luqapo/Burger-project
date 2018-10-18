import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ConatactData extends Component {
    state = {
        name: '',
        email: '',
        addres: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Lucjan Wiśnicdz',
                address: {
                    stret: 'szkolna 12',
                    zipCode: '32-440',
                    city: 'Rudnik'
                },
                email: 'test@testy.com'
            },
            deliveryMethod: 'fastest'
        };

        axios.post('/orders.json', order)
            .then( resp => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch( error => {
                this.setState({loading: false});
                console.log(error);
            });
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                <input className={classes.Input} type="postal" name="postal" placeholder="Your Postal" />
                <input className={classes.Input} type="street" name="street" placeholder="Your Street" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ConatactData;