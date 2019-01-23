import React from 'react';
import Aux from '../../../hoc/HocAux';
import Button from '../../UI/Button/Button';

const orderSummary = ( props ) => {
    const ingredientSummary = Object.keys(props.ingredients)

        .map(igKey => {
            return (
                <li key={igKey}><label style={{textTransform: 'capitalize'}}>{igKey}</label>: {props.ingredients[igKey]}</li>
            );
        });
    return (
        <Aux>
            <p>Your order</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h3>Continue to Checkout?</h3>
            <Button buttonType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button buttonType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );

};

export default orderSummary;