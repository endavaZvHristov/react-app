import React, { Component } from 'react';
import HocAux from '../../hoc/HocAux';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
    };
    render() {
        return (
            <HocAux>
                <Burger ingredients={this.state.ingredients} />
                <article>Build Controls</article>
            </HocAux>
        );
    }
}

export default BurgerBuilder;
