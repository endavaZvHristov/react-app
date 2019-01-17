import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './burgerIngredient.css';
class burgerIngredient extends Component {
    render() {
        let ingredient = null;
        console.log(classes, 'classes');
        switch ( this.props.type ) {
            case('bread-bottom'):
                ingredient = <article className={classes.BreadBottom}></article> ; break;
            case('bread-top'):
                ingredient =(
                    <article className={classes.BreadTop}>
                        <section className={classes.Seeds1}></section>
                        <section className={classes.Seeds2}></section>
                    </article>
                ); break;
            case('meat'):
                ingredient = <article className={classes.Meat}></article> ; break;
            case('cheese'):
                ingredient = <article className={classes.Cheese}></article> ; break;
            case('bacon'):
                ingredient = <article className={classes.Bacon}></article> ; break;
            case('salad'):
                ingredient = <article className={classes.Salad}></article> ; break;

            default: ingredient = null;
        }

        return ingredient;
    }
}

export default burgerIngredient;

burgerIngredient.propsType = {
    type: PropTypes.string.isRequired
};