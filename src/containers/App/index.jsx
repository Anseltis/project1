import React from 'react'

import { Footer } from '../../components/Footer'
import { HeaderContainer } from '../HeaderContainer'
import { BodyContainer } from '../BodyContainer'


import '../../components/FilmHeader/style.scss'

export const App = ()=>  {
      return (
        <>
          <HeaderContainer/>
          <BodyContainer/>
          <Footer />
        </>
      )
}

