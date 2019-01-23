import React from 'react';
import classes from './BuildControl.css';

const buildControl = ( props ) => (
    <section className={classes.BuildControl}>
        <article className={classes.Label}>{ props.label }</article>
        <button
            className={classes.Less}
            disabled={props.disabled}
            onClick={props.removed}
        >
            Less</button>
        <button className={classes.More}  onClick={props.added}>More</button>
    </section>
);

export default buildControl;