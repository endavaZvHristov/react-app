import React, { Component } from 'react';
import HocAux from '../../hoc/HocAux/HocAux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 0.6,
    bacon: 0.8,
};

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false,
    };

    componentDidMount() {
        axios.get('/ingedients.json')
            .then(  (response) => {
                console.log(response);
                this.setState({ingredients: response.data})
            })
            .catch(error => {
                this.state({error: true});
            })
    }
    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    updatePurchasesState (ingredients) {
        console.log(ingredients, '<_--- ingredients');
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchasable: sum > 0});
    }

    purchaseContinueHandler = () => {
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'RudeRide',
                address: {
                    street: '',
                    zipCode: '',
                    country: '',
                },
                email: 'test@ruderider.com',
            },
            deliveryMethode: 'faster',
        };
        axios.post('/orders.json', order)
            .then((response) => {
                console.log(response);
                this.setState({loading: false, purchasing: false});
            })
            .catch((error) => {
                console.log(error);
                this.setState({loading: false, purchasing: false});
            });
    };

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchasesState(updatedIngredients);

    };

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchasesState(updatedIngredients);
    };
    render() {
        const disableInfo = {
          ...this.state.ingredients
        };

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }
        let orderSummary = null;
        let burgerLoaded =  this.state.error ? <p>Something happened with app, Really Sorry!</p> : <Spinner />;
        if (this.state.ingredients){
            burgerLoaded =  (
                <HocAux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemove={this.removeIngredientHandler}
                        disabled={disableInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                    />
                </HocAux>
            );
            orderSummary = <OrderSummary
                price={this.state.totalPrice}
                purchaseContinue={this.purchaseContinueHandler}
                purchaseCancelled={this.purchaseCancelHandler}
                ingredients={this.state.ingredients} />;
        }
        if(this.state.loading) {
            orderSummary = <Spinner />;
        }
        return (
            <HocAux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    {orderSummary}
                </Modal>
                {burgerLoaded}
            </HocAux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
