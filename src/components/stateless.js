import React, { Fragment } from 'react';

export const Stateless = props => {
    return (
        <Fragment>
            <h3>Stateless</h3>
            <div>{props.location.state.mytext}</div>
        </Fragment>
    );
};
