import {GET_MOE} from '../consts/actionsType';

const initialState = {
    moes: []
}

const reducerMoe = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOE:
            return {
                moes: action.payload
            }
            default:
                return state;
    }
}

export default reducerMoe;