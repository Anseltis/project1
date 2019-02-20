import React from 'react'
import PropTypes from 'prop-types'

import { SearchResultLayoutItem } from 'components/MainScreen/SearchResult/FilmItem'
import './style.scss'

export const SearchResultLayout = ({films, onClick}) => {
    const filmsList = films.map((film, index) =>
        <SearchResultLayoutItem item={film} key={index} onClick={onClick}/>
    )
    return (<ul className={'film-layout'}>{filmsList}</ul>)
}
SearchResultLayout.propTypes = {
    films: PropTypes.array
}

