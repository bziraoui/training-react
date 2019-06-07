import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { store } from '../index';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            label: '',
            titles: []
        };
    }
    componentDidMount = () => {
        console.log('Component chargé');
    };
    shouldComponentUpdate = (nextProps, nextState) => {
        return this.state.label === nextState.label;
    };
    componentDidUpdate = () => {
        // alert('Add to my list of titles');
        console.log(store.getState());
    };
    handleChange = e => {
        let label = e.target.value;
        this.setState({ label });
    };
    handleClick = e => {
        let { count, label } = this.state;
        count = count + 1;
        this.setState({ count });
        if (label) {
            this.setState(state => {
                const titles = state.titles.concat(state.label);

                return {
                    titles,
                    label: ''
                };
            });
        }
        this.props.dispatchElement(label);
    };
    render() {
        let list;
        if (store.getState()) {
            console.log(store.getState());
            list = store.getState().map(title => <li key={title}>{title}</li>);
        }
        // if (this.state.count === 3) {
        //     return (
        //         <Redirect
        //             to={{
        //                 pathname: '/stateless',
        //                 state: { mytext: 'clique' }
        //             }}
        //         />
        //     );
        // }
        return (
            <Fragment>
                <h1>Ajouter un titre</h1>
                <input
                    type="text"
                    name="my-text"
                    onChange={this.handleChange}
                />
                <br />
                <label name="realTimeText">{this.state.label}</label> <br />
                <button onClick={this.handleClick}>Ajouter</button>
                <br />
                <h2>Mes titles </h2>
                <ul>{list}</ul>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchElement: state => {
        const action = { type: 'ADD_ELEM', value: state };
        dispatch(action);
    }
});

const mapStateToProps = state => {
    return { state };
};

const HomeRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeRedux;
