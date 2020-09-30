import {updateObject} from '../../utils/utility';
import * as actionTypes from '../actions/actionTypes';


const initialState={
    loading:false,
    data:null,
    error:null
}

const getPayloadStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const getPayloadSuccess = (state, action) => {
    return updateObject( state, { 
        data:action.data,
        error: null,
        loading: false
     } );
};

const getPayloadFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_PAYLOAD_START: return getPayloadStart(state, action);
        case actionTypes.GET_PAYLOAD_SUCCESS: return getPayloadSuccess(state, action);
        case actionTypes.GET_PAYLOAD_FAIL: return getPayloadFail(state, action);
        default:
            return state;
    }
};

export default reducer;