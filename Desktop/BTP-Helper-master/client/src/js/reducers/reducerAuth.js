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

const initialState = {
    token: localStorage.getItem('token'),
    isAuthentificated: false,
    isLoading: false,
    moe: null
};

export default function(state=initialState, action) {
    switch(action.type) {
        case MOE_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case MOE_LOADED:
            return {
                ...state,
                isAuthentificated: true,
                isLoading: false,
                moe: action.payload
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthentificated: true,
                isLoading: false
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                moe: null,
                isAuthentificated: false,
                isLoading: false
            }
        default:
            return state;
    }
}