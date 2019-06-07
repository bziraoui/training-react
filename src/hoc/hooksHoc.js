import React, { useContext, Fragment } from 'react';
import { StoreContext } from '../hooks/store';

export const hooksHoc = Comp => props => {
    const { state, dispatch, actions } = useContext(StoreContext);
    return (
        <Fragment>
            <Comp
                state={state}
                dispatch={dispatch}
                actions={actions}
                {...props}
            />
        </Fragment>
    );
};
