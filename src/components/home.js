import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { hooksHoc } from '../hoc/hooksHoc';
import { actions } from '../hooks/reducers';

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
        return this.state.label !== nextState.label;
    };
    componentDidUpdate = () => {
        // alert('Add to my list of titles');
        // console.log(store.getState());
    };
    handleChange = e => {
        let label = e.target.value;
        this.setState({ label });
    };
    handleClick = e => {
        let { count, label, titles } = this.state;
        count = count + 1;
        if (label) {
            this.state.titles.push(label);
        }
        this.setState({ count, titles: this.state.titles, label: '' });

        this.props.dispatch({
            type: actions.ADD_TITLE,
            payload: this.state.label
        });
        // une autre façons d'envoyer la donner si il y a un traitement avant de dispatcher
        //this.props.actions.addTitle(this.state.label)
        console.log(this.props.state);
    };
    render() {
        if (this.state.count === 3) {
            return (
                <Redirect
                    to={{
                        pathname: '/stateless',
                        state: { mytext: 'clique' }
                    }}
                />
            );
        }
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
                <ul>
                    {this.props.state.titles.map(title => (
                        <li key={title}>{title}</li>
                    ))}
                </ul>
            </Fragment>
        );
    }
}

export default hooksHoc(Home);
