import React from 'react';
import { render } from 'react-dom';
import LandingBase from './components/LandingBase/LandingBase';
import AboutContainer from './components/AboutContainer/AboutContainer';
import LetsTalk from './components/LetsTalk/LetsTalk';
import Thumbs from './components/Thumbs/Thumbs';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Cards from './components/Cards/Cards';
import AsideTabs from './components/AsideTabs/AsideTabs';
import StickyFooter from './components/StickyFooter/StickyFooter';

//testdata
import baseconfig from './tmp/config.json';
import landingpagedata from './tmp/landingdata.json';

import './Base/global.less';

export default class BaseWrapper extends React.Component {
  render() {
    return (
      <section>
        <LandingBase data={this.props.data.landingBase} />
        <AboutContainer data={this.props.data.aboutContainer} />
        <LetsTalk data={this.props.data.talkContainer} />
        <Thumbs data={this.props.data.productsContainer} />
        <Thumbs data={this.props.data.partnersContainer} />
        <Thumbs />
        <br />
        <br />
        <br />
      </section>
    );
  }
}

render(
  <BaseWrapper data={landingpagedata} />,
  document.getElementById( 'app' )
);
