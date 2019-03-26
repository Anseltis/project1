import React from 'react'
import { StaticHeader } from '../StaticHeader'
import { FormContainer } from '../../containers/FormContainer'

export const MainHeader = ({ className, onclick, searchButtonClass }) => {
  return (
    <header className={className}>
      <StaticHeader
        className="navigation"
        onclick={onclick}
        searchButtonClass={searchButtonClass}
      />
      <FormContainer />
    </header>
  )
}
