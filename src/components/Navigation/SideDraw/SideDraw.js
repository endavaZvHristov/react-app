import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/HocAux/HocAux';
import classes from './SideDraw.css';
const sideDraw = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses =  [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}  />
            <article className={attachedClasses}>
                <Logo height="15%" />
                <nav>
                    <NavigationItems/>
                </nav>
            </article>
        </Aux>
    );
}

export default sideDraw;