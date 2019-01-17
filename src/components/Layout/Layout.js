import React from 'react';
import HocAux from '../../hoc/HocAux';
const layout = ( props ) => (
    <HocAux>
        <header>Toolbar, SideDrawer, Backdrop</header>
        <main>
            {props.children}
        </main>
    </HocAux>
);

export default layout;