import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = ( props ) => {
    let transformIngredient = Object.keys( props.ingredients )
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                console.log(_, 'is _');
                console.log(i, 'is i');
                console.log(igKey, 'is igKey');
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    console.log(transformIngredient, 'transformIngredient');
    if (transformIngredient.length === 0) {
        transformIngredient = <p>Pleas start adding ingredients!</p>;
    }

    return (
    <section className={classes.Burger} >
        <BurgerIngredient type="bread-top" />
        <BurgerIngredient type="salad" />
        <BurgerIngredient type="cheese" />
        <BurgerIngredient type="meat" />
        <BurgerIngredient type="bread-bottom" />
    </section>
    );
};
    export default burger;