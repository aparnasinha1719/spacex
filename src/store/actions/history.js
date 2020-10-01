import axios from 'axios';

import * as actionTypes from './actionTypes';
import {url} from '../../utils/connectionUrl';
export const getHistoryStart=()=>{
    return {
        type:actionTypes.GET_HISTORY_START
    }
}
export const getHistorySuccess=(data)=>{
    return {
        type:actionTypes.GET_HISTORY_SUCCESS,
        data:data
    }
}
export const getHistoryFail=(error)=>{
    return {
        type:actionTypes.GET_HISTORY_FAIL,
        error:error
    }
}

export const history=()=>{
    return dispatch=>{
        dispatch(getHistoryStart());
         return new Promise((resolve,reject)=>{
            axios.get(url+'history').then(response=>{
                dispatch(getHistorySuccess(response.data))
            }).catch(response=>{
                
                dispatch(getHistoryFail(response.message))
            })
        })
    } 
}