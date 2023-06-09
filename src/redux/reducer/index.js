import  {combineReducers} from "redux"
import { Counter } from "./counter.reducer"
const rootReducer=combineReducers({
    Counter: Counter
})

export default rootReducer