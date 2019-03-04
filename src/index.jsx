import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { reducer } from './reducers'
import { App } from './containers/App'
import { Test } from './components/Test'
import { AppFilm } from './containers/AppFilm'
import { NotFound } from './components/NotFound'

export const store = createStore(reducer, composeWithDevTools())
render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path="/test" component={Test} />
        <Route path="/:id" exact component={AppFilm} />
        <Route path="/films/:id" exact component={AppFilm} />
        <Route path="/" exact component={App} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
