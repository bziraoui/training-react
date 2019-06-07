export const action = {
    type: 'ADD_ELEM',
    value: ''
};

const initialState = { list: ['test'] };

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ELEM':
            let newState = { state };
            newState.list.push(action.value);
            return newState;
        default:
            return state;
    }
};

export default listReducer;
