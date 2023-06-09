import * as ActionTypes from '../ActionTypes'

const InitialState={
    counter:0
}

export const Counter=(state= InitialState,action)=>{
switch(action.type)
{
    case ActionTypes.INCREMENT:
        return{
            counter:state.counter+1

        }
        case ActionTypes.DECREMENT:
            return{
                counter:state.counter-1
    
            }
            default:
                return state
}
} 