export const initialState = { count: 0, label: '', titles: [] };

export const actions = {
    ADD_TITLE: 'ADD_TITLE'
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TITLE':
            return {
                ...state,
                titles: [...state.titles, action.payload]
            };
        default:
            return state;
    }
};
