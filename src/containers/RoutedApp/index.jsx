import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actionCreator } from '../../actions'
import { routingSelector } from '../../selectors'

class routedApp extends React.Component {
  componentDidMount() {
    this.skipRoute()
  }

  componentDidUpdate(prevProps) {
    const { skipRouting } = this.props
    if (skipRouting || !prevProps.SkipRouting) {
      this.skipRoute()
    }
  }

  skipRoute = () => {
    const { skipRouting } = this.props
    if (skipRouting) {
      const { onSkipRouting } = this.props
      onSkipRouting()
      return
    }

    const { createAction, match, location, history } = this.props
    createAction({ match, location, history })
  }

  render() {
    const {children} = this.props;
    return children;
  }
}

const mapDispatchToProps = (dispatch, { createAction }) => ({
  onSkipRouting: () => dispatch(actionCreator.routing.setSkipRouting(false)),
  createAction: routeProps => dispatch(createAction(routeProps))

})

export const RoutedApp = withRouter(connect(routingSelector, mapDispatchToProps)(routedApp))
