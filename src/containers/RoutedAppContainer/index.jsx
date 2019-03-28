import React from 'react'
import { connect } from 'react-redux'

import { RoutedApp } from '../RoutedApp'

const routedAppContainer = ({ onInitialized, children }) =>
    <RoutedApp onInitialized={onInitialized}>
        {children}
    </RoutedApp>

const mapDispatchToProps = (dispatch, { createAction }) => ({
    onInitialized: (args) => dispatch(createAction(args))
})

export const RoutedAppContainer = connect(null, mapDispatchToProps)(routedAppContainer)