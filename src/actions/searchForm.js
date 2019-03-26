import { actions } from '../actionNames'

export const getData = data => {
  return {
    type: actions.search.dataAction,
    payload: data
  }
}

export const searchFilter = filter => {
  return {
    type: actions.search.bySwitchAction,
    payload: filter
  }
}

export const sortFilter = filter => {
  return {
    type: actions.sortBySwitchAction,
    payload: filter
  }
}
