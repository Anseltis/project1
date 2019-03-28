import React from 'react'

import { actionCreator } from '../../actions'
import { BodyContainer } from '../BodyContainer'
import { Footer } from '../../components/Footer'
import { HeaderContainer } from '../HeaderContainer'
import { RoutedAppContainer } from '../RoutedAppContainer';

const createAction = () => actionCreator.initiate.triggerFetchAllFilms()
export const AppMain = () =>
    <RoutedAppContainer createAction={createAction}>
        <HeaderContainer />
        <BodyContainer />
        <Footer />
    </RoutedAppContainer>
