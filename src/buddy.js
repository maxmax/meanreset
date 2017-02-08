import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import News from './modules/News'
import Contacts from './modules/Contacts'


//import basedata from './tmp/soil.json';
//import userrequests from './components/UserRequest/userrequest.json';
import './Base/global.less';


render((
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      {/* make them children of `App` */}
      <Route path="/news" component={News}/>
      <Route path="/about" component={About}/>
      <Route path="/contacts" component={Contacts}/>
    </Route>
  </Router>
), document.getElementById('app'))
