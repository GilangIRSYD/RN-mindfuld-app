import { combineReducers } from "redux";
import LogReducer from "./LogReducer";
import ReminderReducer from "./ReminderReducer";


const Reducer = combineReducers({
    ReminderReducer,
    LogReducer,
})

export default Reducer