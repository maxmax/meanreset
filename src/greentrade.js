import React from 'react';
import { render } from 'react-dom';
import LandingBase from './components/LandingBase/LandingBase';
import AboutContainer from './components/AboutContainer/AboutContainer';
import LetsTalk from './components/LetsTalk/LetsTalk';
import Thumbs from './components/Thumbs/Thumbs';
import Testimonials from './components/Testimonials/Testimonials';
import ContentContainer from './components/ContentContainer/ContentContainer';
import FooterContainer from './components/FooterContainer/FooterContainer';
import NavBar from './components/NavBar/NavBar';
//testdata
//import basedata from './tmp/greencore.json';
import basedata from './tmp/greentrade.json';

import './Base/global.less';

export default class BaseWrapper extends React.Component {
  render() {
    return (
      <section>
        <NavBar />
        <LandingBase data={this.props.data.landingBase} />
        <AboutContainer data={this.props.data.aboutContainer} />
        <LetsTalk data={this.props.data.talkContainer} address={this.props.data.talkContainer.address} />
        <ContentContainer data={this.props.data.expertsContainer} />
        <FooterContainer data={this.props.data.footerContainer} />
      </section>
    );
  }
}

render(
  <BaseWrapper data={basedata} />,
  document.getElementById('app')
);
