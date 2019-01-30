import React, { Component } from 'react';
import classes from './Modal.css';
import HocAux from '../../../hoc/HocAux/HocAux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show;
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[Modal] wiil update');
    }

    render() {
        return(
            <HocAux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <section className={classes.Modal}
                         style={{
                             transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                             opacity: this.props.show ? '1' : '0',
                         }}>
                    {this.props.children}
                </section>
            </HocAux>
        );
    }
}

export default Modal;