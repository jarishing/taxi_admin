import { createReducer }    from '../../utils/reducer';

const initState = {
    userId      : null,
    orderId     : null
};

const actionHandlers = {
    SET_USER_ID : ( state, action ) => {
        let result = { ... state };
        result.userId = action.payload.userId;
        console.log(result);
        return result;
    },
    SET_ORDER_ID : ( state, action ) => {
        let result = { ... state };
        result.orderId = action.payload.orderId;
        console.log(result);
        return result;
    },
};

export default createReducer( initState, actionHandlers );