import React, { Fragment, useContext } from 'react';
import { StoreContext } from '../hooks/store';
export const Stateless = props => {
    const { state, dispatch, actions } = useContext(StoreContext);
    return (
        <Fragment>
            <h3>Stateless</h3>
            <ul>
                {state.titles.map(title => (
                    <li key={title}>{title}</li>
                ))}
            </ul>
        </Fragment>
    );
};
