import {updateObject} from '../../utils/utility';
import * as actionTypes from '../actions/actionTypes';


const initialState={
    loading:false,
    data:null,
    error:null
}

const getHistoryStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const getHistorySuccess = (state, action) => {
    return updateObject( state, { 
        data:action.data,
        error: null,
        loading: false
     } );
};

const getHistoryFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_HISTORY_START: return getHistoryStart(state, action);
        case actionTypes.GET_HISTORY_SUCCESS: return getHistorySuccess(state, action);
        case actionTypes.GET_HISTORY_FAIL: return getHistoryFail(state, action);
        default:
            return state;
    }
};

export default reducer;