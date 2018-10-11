import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSumary/OrderSumary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7

};

class BurgerBuilder extends Component{
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchaising: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        axios.get('https://myburgerproject-20650.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data});
            })
            .catch(error => {
                this.setState({error: true})
            });
    }

    updatePurchaseState (ingredients) {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
        })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0 ) {
            return;
        }
        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchaising: true});
    }

    purchaseCalncelHandler = () => {
        this.setState({purchaising: false});
    }

    pruchaseContinueHandler = () => {

        // this.setState({loading: true});
        //
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Lucjan Wiśnicdz',
        //         address: {
        //             stret: 'szkolna 12',
        //             zipCode: '32-440',
        //             city: 'Rudnik'
        //         },
        //         email: 'test@testy.com'
        //     },
        //     deliveryMethod: 'fastest'
        // };
        //
        // axios.post('/orders.json', order)
        //     .then( resp => {
        //         this.setState({loading: false, purchaising: false});
        //     })
        //     .catch( error => {
        //         this.setState({loading: false, purchaising: false});
        //         console.log(error);
        //     });
        this.props.history.push('/checkout');
    }

    render(){
        const disableInfo = {
            ...this.state.ingredients
        };
        for(let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredienta can't be loaded!</p> : <Spinner/>;

        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientDeduced={this.removeIngredientHandler}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                        disabled={disableInfo}
                        price={this.state.totalPrice}/>
                </Aux>
            );
            orderSummary =  <OrderSummary
                price={this.state.totalPrice}
                ingredients={this.state.ingredients}
                purchaseCancel={this.purchaseCalncelHandler}
                purchaseContinue={this.pruchaseContinueHandler}  />;
        }
        if(this.state.loading){
            orderSummary = <Spinner/>;
        }

        return (
          <Aux>
              <Modal show={this.state.purchaising} modalClosed={this.purchaseCalncelHandler}>
                  {orderSummary}
              </Modal>
              {burger}
          </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);