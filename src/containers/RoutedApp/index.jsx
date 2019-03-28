import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

export const RoutedAppContext = React.createContext()

class skipRouting extends React.Component {
  componentDidMount() {
    this.skipRoute()
  }

  componentDidUpdate(prevProps) {
    const { skipRouting } = this.props
    if (skipRouting || !prevProps.skipRouting) {
      this.skipRoute()
    }
  }

  skipRoute = () => {
    const { skipRouting } = this.props
    if (skipRouting) {
      const { setSkipRouting } = this.props
      setSkipRouting(true)
      return
    }

    const { onInitialized, match, location, history } = this.props
    if (onInitialized) {
      onInitialized({ match, location, history })
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

const SkipRouting = withRouter(skipRouting)

export const RoutedAppProvider = ({ children }) => {
  const [skipRouting, setSkipRouting] = useState(false)
  return <RoutedAppContext.Provider value={{ skipRouting, setSkipRouting }}>
    {children}
  </RoutedAppContext.Provider>
}

export const RoutedApp = ({ onInitialized, children }) => {
  return <RoutedAppContext.Consumer>
    {context => <SkipRouting onInitialized={onInitialized} {...context} >
      {children}
    </SkipRouting>}
  </RoutedAppContext.Consumer>
}

export const useRoutedApp = (WrappedComponent) => {
  const routedAppComponent = (props) => {
    return <RoutedAppContext.Consumer>
      {context => <WrappedComponent {...props} {...context} />}
    </RoutedAppContext.Consumer>
  }
  return routedAppComponent
}