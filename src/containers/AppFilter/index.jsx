import React from 'react'
import { parse } from 'query-string'

import { actionCreator } from '../../actions'
import { BodyContainer } from '../BodyContainer'
import { Footer } from '../../components/Footer'
import { HeaderContainer } from '../HeaderContainer'
import { RoutedApp } from '../RoutedApp'

const createAction = ({ location }) => {
  const params = parse(location.search)
  return actionCreator.initiate.getInfoFromUrl(params)
}

export const AppFilter = () =>
  <RoutedApp createAction={createAction}>
    <HeaderContainer />
    <BodyContainer />
    <Footer />
  </RoutedApp>
