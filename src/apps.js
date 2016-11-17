import React from 'react';
import { render } from 'react-dom';
import LandingBase from './components/LandingBase/LandingBase';
import AboutContainer from './components/AboutContainer/AboutContainer';
import LetsTalk from './components/LetsTalk/LetsTalk';
import Thumbs from './components/Thumbs/Thumbs';
import Testimonials from './components/Testimonials/Testimonials';
import ContentContainer from './components/ContentContainer/ContentContainer';
//
import Jumbotron from './components/Jumbotron/Jumbotron';
import Cards from './components/Cards/Cards';
import AsideTabs from './components/AsideTabs/AsideTabs';
import StickyFooter from './components/StickyFooter/StickyFooter';

//testdata
import baseconfig from './tmp/config.json';
//import basedata from './tmp/landingdata.json';
import basedata from './tmp/landingdatacore.json';

import './Base/global.less';

export default class BaseWrapper extends React.Component {
  render() {
    return (
      <section>
        <LandingBase data={this.props.data.landingBase} />
        <AboutContainer data={this.props.data.aboutContainer} />
        <LetsTalk data={this.props.data.talkContainer} />
        <ContentContainer data={this.props.data.expertsContainer} />
        <Thumbs data={this.props.data.whatsnewContainer} />
        <Thumbs data={this.props.data.partnersContainer} />
        <Testimonials data={this.props.data.testimonials} />
        <Thumbs />
        <br />
        <br />
        <br />
      </section>
    );
  }
}

//<BaseWrapper data={landingpagedata} />
render(
  <BaseWrapper data={basedata} />,
  document.getElementById( 'app' )
);
