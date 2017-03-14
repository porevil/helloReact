import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App/App'
import Home from './components/Home'
import { PagesContainer } from './containers'
//import { Pages } from './components/Pages'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/'
             component={App}>
        <IndexRoute component={Home} />
        <route path='pages'
               component={PagesContainer} />
               <IndexRoute component={Pages} />
      </Route>
    </Router>
  )
}