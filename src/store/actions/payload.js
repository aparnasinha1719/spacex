import axios from 'axios';

import * as actionTypes from './actionTypes';
import {url} from '../../utils/connectionUrl';
export const getPayloadStart=()=>{
    return {
        type:actionTypes.GET_PAYLOAD_START
    }
}
export const getPayloadSuccess=(data)=>{
    return {
        type:actionTypes.GET_PAYLOAD_SUCCESS,
        data:data
    }
}
export const getPayloadFail=(error)=>{
    return {
        type:actionTypes.GET_PAYLOAD_FAIL,
        error:error
    }
}

export const payload=()=>{
    return dispatch=>{
        dispatch(getPayloadStart());
        return new Promise((resolve,reject)=>{
            axios.get(url+'payloads').then(response=>{
                resolve(response)
                dispatch(getPayloadSuccess(response.data))
            }).catch(response=>{
                dispatch(getPayloadFail(response))
            })
        })
    } 
}