export const action = {
    type: 'ADD_ELEM',
    value: ''
};

const initialState = { list: [] };

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ELEM':
            let newState = state;
            newState.list.push(action.value);
            console.log(newState);
            return newState;
    }
};

export default listReducer;
