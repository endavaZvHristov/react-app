import React, { Component } from 'react';
import HocAux from '../../hoc/HocAux';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
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
