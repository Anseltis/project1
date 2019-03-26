import React from 'react'

import { StaticHeader } from '../StaticHeader'
import { MovieCard } from '../MovieCard'
import { FormContainer } from '../../containers/FormContainer'

import './style.scss'

export const FilmHeader = ({ film, className, onclick, searchButtonClass }) => {
  return (
    <header className={className}>
      <StaticHeader
        className="navigation"
        onclick={onclick}
        searchButtonClass={searchButtonClass}
      />
      <MovieCard film={film} />
      <FormContainer />
    </header>
  )
}
