import { fromJS, Map } from 'immutable'
import { actions } from '../actionNames'

export function routingReducer(state = Map({ skipRouting: false }), action) {
  switch (action.type) {
    case actions.routing:
      return state.setIn(['skipRouting'], fromJS(action.payload))
    default:
      return state
  }
}
