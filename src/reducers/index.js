import { combineReducers } from 'redux'
// import { Map } from 'immutable'
import { routingReducer } from './routing'

import { mainReducer } from './main'


export const reducer =  combineReducers({
  main: mainReducer,
  routing: routingReducer
})
