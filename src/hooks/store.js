import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducers';
import { useActions } from './actions';

export const StoreContext = createContext({ label: '', titles: [] });

export const StoreProvider = ({ children }) => {
    // const [state, setState] = useState(initialState);
    const [state, dispatch] = useReducer(reducer, initialState);
    const actions = useActions(state, dispatch);

    return (
        <StoreContext.Provider value={{ state, dispatch, actions }}>
            {children}
        </StoreContext.Provider>
    );
};
