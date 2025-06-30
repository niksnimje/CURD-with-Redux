const initialState={
    count:1
}

export function CounterReducer(state=initialState,action){
    switch(action.type){
        case "Increment":{
            return {...state ,count: state.count+1}
        } 
        default:{
            return state
        }
    }
}


