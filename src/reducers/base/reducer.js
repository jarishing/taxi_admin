import { createReducer }    from '../../utils/reducer';

const initState = {
    login       : false,
    user        : null,
    token       : null
};

const actionHandlers = {
    LOGIN : ( state, action ) => {
        let result = { ... state };
        result.login = true;
        result.token = action.payload.token;
        result.user = action.payload.user;
        return result;
    }
};

export default createReducer( initState, actionHandlers );