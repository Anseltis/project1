import React from 'react'

import { Input } from 'components/Header/SearchForm/Input'
import { SearchByPanel } from 'components/Header/SearchByPanel'

import './style.scss'

export const SearchForm = ({className, onChange, onSubmit, value, searchBy, titleChecked, genreChecked, titleLabelClass, genreLabelClass}) => {
    return (
        <form className={`${className} main-search`} onSubmit={onSubmit}>
            <h1 className='main-search__h1'>Find your movie</h1>
            <Input className = 'main-search__input' placeholder='Quentin Tarantino' onChange={onChange} value = {value}/>
            <div className='main-search__container'>
            <SearchByPanel
                className='search-by'
                searchBy={searchBy}
                titleChecked={titleChecked}
                genreChecked={genreChecked}
                titleLabelClass={titleLabelClass}
                genreLabelClass={genreLabelClass}/>
            <input type="submit" className='main-search__button' />
            </div>
        </form>
    )
}
