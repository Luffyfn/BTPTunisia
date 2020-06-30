import axios from 'axios';

import {GET_MOE} from '../consts/actionsType';

//Get All MOE
 const getMoe = () => dispatch => {
    axios.get("api/moe").then((res) => dispatch({
        type: GET_MOE,
        payload: res.data
    })).catch(err => console.log(err))
}

// Add MOE

 const addMoe = (newMoe) => dispatch => {
    axios.post("api/moe", newMoe).then(() => dispatch(getMoe)).catch(err => console.log(err))
}

export {addMoe,getMoe}