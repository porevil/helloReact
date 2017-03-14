import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
//import App from './components/App/App'
import {App,
  Home,
  Pages
} from './components'

render((
  <Router history={browserHistory}>
    <Route path='/'
           component={App}>
      <IndexRoute component={Home} />
      <Route path='pages'
             component={Pages} />
    </Route>
  </Router>
), document.getElementById('app'))
