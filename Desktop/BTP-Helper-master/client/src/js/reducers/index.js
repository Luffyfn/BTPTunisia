import {combineReducers} from "redux";
import reducerAuth from './reducerAuth';
import reducerError from './reducerError';
import reducerMoe from './reducerMoe';

const reducer = combineReducers({
    rMoe: reducerMoe,
    rAuth: reducerAuth,
    rError: reducerError
});

export default reducer;