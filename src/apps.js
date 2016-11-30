import React from 'react';
import { render } from 'react-dom';
import LandingBase from './components/LandingBase/LandingBase';
import AboutContainer from './components/AboutContainer/AboutContainer';
import LetsTalk from './components/LetsTalk/LetsTalk';
import Thumbs from './components/Thumbs/Thumbs';
import Testimonials from './components/Testimonials/Testimonials';
import ContentContainer from './components/ContentContainer/ContentContainer';
import FooterContainer from './components/FooterContainer/FooterContainer';
import ProjectHeader from './components/ProjectHeader/ProjectHeader';
import ProfBase from './components/ProfBase/ProfBase';
import Profs from './components/ProfBase/Profs';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import UserRequest from './components/UserRequest/UserRequest';

//
//import Jumbotron from './components/Jumbotron/Jumbotron';
//import Cards from './components/Cards/Cards';
//import AsideTabs from './components/AsideTabs/AsideTabs';
//import StickyFooter from './components/StickyFooter/StickyFooter';

//testdata
//import baseconfig from './tmp/config.json';
//import basedata from './tmp/landingdata.json';
//import basedata from './tmp/landingdatacore.json';
//import basedata from './tmp/greencore.json';
import basedata from './tmp/allui.json';

import './Base/global.less';

export default class BaseWrapper extends React.Component {
  render() {
    console.log("Is!");
    return (
      <section>
        <LandingBase data={this.props.data.landingBase} />
        <AboutContainer data={this.props.data.aboutContainer} />
        <LetsTalk data={this.props.data.talkContainer} address={this.props.data.talkContainer.address} />
        <ContentContainer data={this.props.data.expertsContainer} />
        <Thumbs data={this.props.data.whatsnewContainer} />
        <Thumbs data={this.props.data.partnersContainer} />
        <Testimonials data={this.props.data.testimonials} />

        <Thumbs />

        <div className="container">
          <br />
          <br />
          <RegistrationForm />
          <br />
          <br />
          <ProjectHeader title="User Profile" />
          <ProfBase data={this.props.data.CurentProfile} />
          <UserRequest data={this.props.data.CurentRequests} />
          <br />
          <br />
          <ProfBase data={this.props.data.CurentProfile} isCurrentIn="true" />
          <br />
          <br />
          <ProjectHeader title="Profiles" />
          <Profs data={this.props.data.users} />
          <br />
          <br />
        </div>

        <FooterContainer data={this.props.data.footerContainer} />

      </section>
    );
  }
}

//<BaseWrapper data={landingpagedata} />
render(
  <BaseWrapper data={basedata} />,
  document.getElementById( 'app' )
);
