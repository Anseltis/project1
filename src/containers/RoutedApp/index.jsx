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
      const { setOffSkipRouting } = this.props
      setOffSkipRouting()
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
  const setOnSkipRouting = () => setSkipRouting(true)
  const setOffSkipRouting = () => setSkipRouting(true)
  return <RoutedAppContext.Provider value={{ skipRouting, setOnSkipRouting, setOffSkipRouting }}>
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
  const routedAppComponent = (props) =>
    <RoutedAppContext.Consumer>
      {({ setOnSkipRouting }) => <WrappedComponent setOnSkipRouting={setOnSkipRouting} {...props} />}
    </RoutedAppContext.Consumer>
  return routedAppComponent
}