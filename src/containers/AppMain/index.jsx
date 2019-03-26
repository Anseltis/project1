import React from 'react'

import { actionCreator } from '../../actions'
import { BodyContainer } from '../BodyContainer'
import { Footer } from '../../components/Footer'
import { HeaderContainer } from '../HeaderContainer'
import { RoutedApp } from '../RoutedApp'

const createAction = () => actionCreator.initiate.triggerFetchAllFilms()
export const AppMain = () =>
    <RoutedApp createAction={createAction}>
        <HeaderContainer />
        <BodyContainer />
        <Footer />
    </RoutedApp>
