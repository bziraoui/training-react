import React, { Fragment, useContext } from 'react';
import { StoreContext } from '../hooks/store';
import { Home } from './home';

export const Homeless = props => {
    const [state, setState] = useContext(StoreContext);
    return (
        <Fragment>
            <Home state={state} setState={setState} {...props} />
        </Fragment>
    );
};
