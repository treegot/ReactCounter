import {createStore} from "redux";
import rootReducer from './reducer/index'
export const ConfigureStore=()=>
{
const store=createStore(
rootReducer
)
return store

}
