
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { ProdcutReducer } from './Reducer/productReducer'
import { CounterReducer } from './Reducer/counterReducer'
import {thunk} from 'redux-thunk';

const rootReducer=combineReducers({
    ProductState:ProdcutReducer,
    CounterState:CounterReducer 
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk) )
