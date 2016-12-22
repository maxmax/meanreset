import React from 'react';
import { render } from 'react-dom';
import LandingBase from './components/LandingBase/LandingBase';
import AboutContainer from './components/AboutContainer/AboutContainer';
import LetsTalk from './components/LetsTalk/LetsTalk';
import Thumbs from './components/Thumbs/Thumbs';
import Testimonials from './components/Testimonials/Testimonials';
import SlideHot from './components/SlideHot/SlideHot';
import ContentContainer from './components/ContentContainer/ContentContainer';
import FooterContainer from './components/FooterContainer/FooterContainer';
import NavBar from './components/NavBar/NavBar';
import Worldwide from './components/Worldwide/Worldwide';

//testdata
import basedata from './tmp/soilmedia.json';

import './Base/global.less';
import './Base/soilmediath.less';

export default class BaseWrapper extends React.Component {
  render() {
    return (
      <section className="soilmedia-th">

        <NavBar data={this.props.data.navBar} />
        <LandingBase data={this.props.data.landingBase} />

        <SlideHot
          data={this.props.data.aboutHot}
          intid={this.props.data.aboutHot.id}
        />

        <LetsTalk
          data={this.props.data.talkContainer}
          address={this.props.data.talkContainer.address}
          intid={this.props.data.talkContainer.id}
        />

        <ContentContainer
          data={this.props.data.expertsContainer}
          intid={this.props.data.expertsContainer.id}
        />

        <Thumbs
          data={this.props.data.whatsnewContainer}
          intid={this.props.data.whatsnewContainer.id}
        />

        <Testimonials
          data={this.props.data.testimonials}
          intid={this.props.data.testimonials.id}
        />

        <Thumbs
          data={this.props.data.partnersContainer}
          intid={this.props.data.partnersContainer.id}
        />

        <ContentContainer
          data={this.props.data.howitworksContainer}
          intclass={this.props.data.howitworksContainer.intclass}
        />

        <ContentContainer data={this.props.data.benefitsContainer} />

        <FooterContainer data={this.props.data.footerContainer} />

      </section>
    );
  }
}

render(
  <BaseWrapper data={basedata} />,
  document.getElementById('app')
);
