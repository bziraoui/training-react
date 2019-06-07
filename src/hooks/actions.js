import { actions } from './reducers';

export const useActions = (state, dispatch) => {
    const addTitle = title => {
        dispatch({ type: actions.ADD_TITLE, payload: title });
    };

    return {
        addTitle
    };
};
