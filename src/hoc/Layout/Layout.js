import React, { Component } from 'react';
import HocAux from '../HocAux/HocAux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDraw from '../../components/Navigation/SideDraw/SideDraw';


class Layout extends Component {
    state = {
        showSideBar: false,
    };

    sideDrawerClosedHandler = () => {
      this.setState( {showSideBar: false} )
    };

    // drawerToggleClicked = () => {
    //   this.setState( ( prevState ) => {
    //       return {showSideBar: !prevState.showSideBar};
    //   } )
    // };
    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return {showSideBar: !prevState.showSideBar};
    });
    };
    render() {
        return(
            <HocAux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDraw open={this.state.showSideBar} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.HeaderTop}  >
                    {this.props.children}
                </main>

            </HocAux>
        );
    }
}

export default Layout;