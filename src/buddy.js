import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Terms from './modules/Terms'
import Privacy from './modules/Privacy'

import './Base/global.less';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* make them children of `App` */}
      <Route path="/about" component={About}/>
      <Route path="/terms" component={Terms}/>
      <Route path="/privacy" component={Privacy}/>
    </Route>
  </Router>
), document.getElementById('app'))
