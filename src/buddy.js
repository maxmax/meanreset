import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import News from './modules/News'
import Services from './modules/Services'
import Cooperation from './modules/Cooperation'
import Reviews from './modules/Reviews'
import Contacts from './modules/Contacts'
import Terms from './modules/Terms'
import Privacy from './modules/Privacy'
import Profile from './modules/Profile'

import LandingBase from './components/LandingBase/LandingBase';
import AboutContainer from './components/AboutContainer/AboutContainer';
import LetsTalk from './components/LetsTalk/LetsTalk';
import ContentContainer from './components/ContentContainer/ContentContainer';
import Thumbs from './components/Thumbs/Thumbs';
import Testimonials from './components/Testimonials/Testimonials';
import Worldwide from './components/Worldwide/Worldwide';

import ProjectHeader from './components/ProjectHeader/ProjectHeader';
import ProfBase from './components/ProfBase/ProfBase';

import basedata from './tmp/soil.json';
import './Base/global.less';

const reservBaseTest = (
  <div>
    <LandingBase data={basedata.landingBase} />
    <AboutContainer data={basedata.aboutContainer} />
    <LetsTalk data={basedata.talkContainer} address={basedata.talkContainer.address} />
    <ContentContainer data={basedata.expertsContainer} />
    <Thumbs data={basedata.whatsnewContainer} />
    <Testimonials data={basedata.testimonials} />
    <Thumbs data={basedata.partnersContainer} />
    <ContentContainer data={basedata.howitworksContainer} />
    <ContentContainer data={basedata.benefitsContainer} />
    <Worldwide data={basedata.Worldwide} />
  </div>
);

const profsBaseTest = (
  <div className="container page">
    <ProjectHeader title="User Profile" />
    <ProfBase data={basedata.CurentProfile} />
  </div>
);

//const reservBaseTest = (
//
//);

render((
  <Router history={hashHistory}>
    <Route path="/" component={App} indata={basedata} incomponents={reservBaseTest}>
      {/* make them children of `App` */}
      <Route path="/news" component={News}/>
      <Route path="/about" component={About}/>
      <Route path="/services" component={Services}/>
      <Route path="/cooperation" component={Cooperation}/>
      <Route path="/reviews" component={Reviews}/>
      <Route path="/contacts" component={Contacts}/>
      <Route path="/terms" component={Terms}/>
      <Route path="/privacy" component={Privacy}/>
      <Route path="/profile" component={Profile}  incomponents={profsBaseTest}/>
    </Route>
  </Router>
), document.getElementById('app'))
