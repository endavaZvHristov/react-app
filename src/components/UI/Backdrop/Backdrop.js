import React from 'react';
import classes from './Backdrop.css';
const backdrop = ( props ) => (
    props.show ? <section className={classes.Backdrop} onClick={props.clicked} ></section> : null
);

export default backdrop;