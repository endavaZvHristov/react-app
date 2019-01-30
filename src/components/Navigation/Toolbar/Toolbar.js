import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDraw/DrawerToggle/DrawerToggle';
const toolbar = ( props ) => (
        <headеr className={classes.Toolbar}>
            <DrawerToggle  clicked={props.drawerToggleClicked}/>
            <Logo height="80%" />
            <nav>
              <NavigationItems/>
            </nav>
        </headеr>
);

export default toolbar;