import axios from 'axios';

import {
    MOE_LOADING,
    MOE_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../consts/actionsType';

import {returnErrors} from './actionError';

//Check Token and load Moe
export const loadMoe = () => (dispatch, getState) => {
    //Moe loading
    dispatch({type: MOE_LOADING});

    //Get token from local storage
    const token = getState().rAuth.token;

    //Headers
    const config = {
        headers: {
            "Content-Type" : "aplication/json"
        }
    }

    //if token, add to headers
    if(token){
        config.headers["x-auth-token"] = token
    } 

    axios.get("api/auth/moe", config)
        .then(res => dispatch({
            type: MOE_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
}


//Register MOE

export const registerMoe =({type,nom,prenom,login,pwd,email,nom_societe,adresse,description,activite})=>dispatch=>{
//header
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }

// Body request
    const body=JSON.stringify({type,nom,prenom,login,pwd,email,nom_societe,adresse,description,activite})
    axios.post('/api/moe',body,config)
    .then(res=>dispatch({
        type:REGISTER_SUCCESS,
        payload:res.data
    }))
    .catch(err=>{
        dispatch(returnErrors(err.response.data, err.response.status,'REGISTER_FAIL'))
        dispatch({
            type:REGISTER_FAIL
        })
    })
}