import React from 'react'

import { Sorter } from './Sorter'

export const SearchSettings = ({counter, sortActions, filter}) => {
    return (
        <div className='search-settings'>
            <div className='search-settings__counter'>
                <span className='search-settings__info'>{counter} movies found</span>
            </div>
            <div className='search-settings__controls'>
                <Sorter sortActions={sortActions}
                        filter={filter}
                />
            </div>
        </div>
    )
}
// sorter как children
