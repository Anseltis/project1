import React from 'react'
import { parse } from 'query-string'

import { actionCreator } from '../../actions'
import { BodyContainer } from '../BodyContainer'
import { Footer } from '../../components/Footer'
import { HeaderContainer } from '../HeaderContainer'
import { RoutedAppContainer } from '../RoutedAppContainer';

const createAction = ({ location }) => {
  const params = parse(location.search)
  return actionCreator.initiate.getInfoFromUrl(params)
}

export const AppFilter = () =>
  <RoutedAppContainer createAction={createAction}>
    <HeaderContainer />
    <BodyContainer />
    <Footer />
  </RoutedAppContainer>
