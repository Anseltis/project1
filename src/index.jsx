import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'

import { reducer } from './reducers/index'
import { AppFilm } from './containers/AppFilm'
import { AppMain } from './containers/AppMain'
import { AppFilter } from './containers/AppFilter'
import { NotFound } from './components/NotFound'
import rootSaga from './sagas/saga'

import './style.scss'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

export const store = createStore(
  reducer, 
  composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path="/films/:id" exact component={AppFilm} />
        <Route path="/filter" component={AppFilter} />
        <Route path="/" exact component={AppMain} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
