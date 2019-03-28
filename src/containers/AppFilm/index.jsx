import React from 'react'

import { actionCreator } from "../../actions"
import { Footer } from '../../components/Footer'
import { HeaderContainer } from '../HeaderContainer'
import { MovieInfoScreenWrapper } from '../../components/MovieInfoScreenWrapper'
import { MoreMoviesByGenreContainer } from '../MoreMoviesByGenreContainer'
import { RoutedAppContainer } from '../RoutedAppContainer';

const createAction = ({ match }) => actionCreator.initiate.setInfoFromRouting(match)

export const AppFilm = () =>
    <RoutedAppContainer createAction={createAction}>
        <HeaderContainer />
        <MovieInfoScreenWrapper>
            <MoreMoviesByGenreContainer genre="" />
        </MovieInfoScreenWrapper>
        <Footer />
    </RoutedAppContainer>
