import { combineReducers } from "redux";
import AuthReducer from "./authReducer";

const Reducers = combineReducers({
    auth: AuthReducer
});

export default Reducers;