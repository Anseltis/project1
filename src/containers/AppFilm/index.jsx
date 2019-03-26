import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createSelector } from 'reselect'

import { App } from '../App'
import { actionCreator } from '../../actions'
import {
  searchParamsSelector,
  routingSelector
} from '../../selectors'

class AppFilmUnwrapped extends React.Component {
  async componentDidMount() {
    const { skipRouting } = this.props
    if (skipRouting) {
      const { dispatch } = this.props
      dispatch(actionCreator.routing.setSkipRouting(false))
      return
    }
    const { dispatch, sortBy, match } = this.props
    dispatch(actionCreator.initiate.setInfoFromRouting(sortBy, match))
  }

  async componentDidUpdate(prevProps) {
    const { skipRouting } = this.props
    if (!skipRouting && prevProps.skipRouting) {
      return
    }
    const { dispatch } = this.props
    if (skipRouting) {
      dispatch(actionCreator.routing.setSkipRouting(false))
      return
    }
    const { sortBy, match } = this.props
    dispatch(actionCreator.initiate.setInfoFromRouting(sortBy, match))
  }
  render() {
    return <App />
  }
}

const mapStateToProps = createSelector(
  [routingSelector, searchParamsSelector],
  (routing, searchParams) => {
    return ({
    ...routing,
    ...searchParams
  })}
)

export const AppFilm = withRouter(connect(mapStateToProps)(AppFilmUnwrapped))
