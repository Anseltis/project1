export const actions = {
  search: {
    bySwitchAction: 'searchBySwitchAction',
    dataAction: 'searchDataAction'
  },

  loadingStatusUpdate: 'loadingStatusUpdate',
  filmsDataAction: 'filmsDataAction',
  mainViewSwitchAction: 'mainViewSwitchAction',
  sortBySwitchAction: 'sortBySwitchAction',
  showFilmInfoAction: 'showFilmInfoAction',
  moviesFoundQuantityUpdate: 'moviesFoundQuantityUpdate',
  filmKeyAction: 'filmKeyAction',
  sameGenreFilmsAction: 'sameGenreFilmsAction',
  defineZoneClick: 'defineZoneClick',
  clickedFilm: 'clickedFilm',
  filmObject: 'filmObject',
  filmsDataAllInfo: 'filmsDataAllInfo',
  moreFilmsByIdAction: 'moreFilmsByIdAction',
  routing: 'routing',
  dataFromQueryUrlAction: 'dataFromQueryUrlAction',
  clearFilmInfoAction: 'clearFilmInfoAction'
}

export const sagaActions = {
  sagaSearch: {
    bySwitchAction: 'sagaSearchBySwitchAction',
    dataAction: 'sagaSearchDataAction'
  },
  sagaAppFilmAction: 'sagaAppFilmAction',
  sagaAppFilterAction: 'sagaAppFilterAction',
  sagaSortByAction: 'sagaSortByAction',
  sagaSortByDefaultAction: 'sagaSortByDefaultAction',
  sagaFormSubmitAction: 'sagaFormSubmitAction',
  sagaFetchAllFilmsAction: 'sagaFetchAllFilmsAction',
  sagaFilmObject: 'sagaFilmObject'
}
