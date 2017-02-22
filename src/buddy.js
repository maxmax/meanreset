import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import News from './modules/News'
import Contacts from './modules/Contacts'

import BaseDoc from './modules/BaseDoc'
import JumbotronDoc from './modules/JumbotronDoc'
import FlexDoc from './modules/FlexDoc'
import SectionDoc from './modules/SectionDoc'
import MediaDoc from './modules/MediaDoc'
import ButtonDoc from './modules/ButtonDoc'
import ThumbsDoc from './modules/ThumbsDoc'


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
      <Route path="/base" component={BaseDoc}/>
      <Route path="/jumbotron" component={JumbotronDoc}/>
      <Route path="/flex" component={FlexDoc}/>
      <Route path="/section" component={SectionDoc}/>
      <Route path="/media" component={MediaDoc}/>
      <Route path="/buttons" component={ButtonDoc}/>
      <Route path="/thumbs" component={ThumbsDoc}/>
    </Route>
  </Router>
), document.getElementById('app'))
