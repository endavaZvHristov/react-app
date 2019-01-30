import React, { Component } from 'react';
import Aux from '../../../hoc/HocAux/HocAux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('Order will update');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)

            .map(igKey => {
                return (
                    <li key={igKey}><label style={{textTransform: 'capitalize'}}>{igKey}</label>: {this.props.ingredients[igKey]}</li>
                );
            });
        return(

            <Aux>
                <p>Your order</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <h1>Total Price: <strong>{this.props.price.toFixed(2)}</strong></h1>
                <h3>Continue to Checkout?</h3>
                <Button buttonType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button buttonType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;