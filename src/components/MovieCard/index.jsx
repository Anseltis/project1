import React from 'react'

import './style.scss'

export const MovieCard = ({film}) => {
<<<<<<< HEAD
    return <div className={'header__movie-info info-block'}>
        <img src={film.poster_path} alt={''} className={'info-block__cover'}/>
        <div className={'info-block__description'}>
            <h1 className={'info-block__title'}>{film.title}</h1>
            <span className={'info-block__genre'}>{film.genre}</span>
              <div className={'info-block__sub-info'}>
                  <span className={'info-block__year'}>{film.release_date}</span>
                  <span className={'info-block__length'}>{film.runtime} min</span>
              </div>
            <p className={'info-block__annotation'}>{film.overview}</p>
=======
    return <div className='header__movie-info info-block'>
        <img src={film.poster_path} alt='' className='info-block__cover'/>
        <div className='info-block__description'>
            <h1 className='info-block__title'>{film.title}</h1>
            <span className='info-block__genre'>{film.genre}</span>
              <div className='info-block__sub-info'>
                  <span className='info-block__year'>{film.release_date}</span>
                  <span className='info-block__length'>{film.runtime} min</span>
              </div>
            <p className='info-block__annotation'>{film.overview}</p>
>>>>>>> 6c3a8cc94e523dd87750ed8c2e37533009112c02
        </div>
    </div>
}
