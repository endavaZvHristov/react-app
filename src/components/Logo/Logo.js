import React from 'react';
import classes from './Logo.css';
import burgerLogo from '../../assets/images/logo.jpg';
const logo = ( props ) => (
    <article className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="Burger Logo" />
    </article>
);

export default logo;