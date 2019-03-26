import React from 'react'

import { actionCreator } from "../../actions"
import { Footer } from '../../components/Footer'
import { HeaderContainer } from '../HeaderContainer'
import { MovieInfoScreenWrapper } from '../../components/MovieInfoScreenWrapper'
import { MoreMoviesByGenreContainer } from '../MoreMoviesByGenreContainer'
import { RoutedApp } from '../RoutedApp'

const createAction = ({ match }) => actionCreator.initiate.setInfoFromRouting(match)

export const AppFilm = () =>
    <RoutedApp createAction={createAction}>
        <HeaderContainer />
        <MovieInfoScreenWrapper>
            <MoreMoviesByGenreContainer genre="" />
        </MovieInfoScreenWrapper>
        <Footer />
    </RoutedApp>
