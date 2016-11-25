import React, { Component, PropTypes }  from 'react';
import ContainerMedia from '../../elements/ContainerMedia/ContainerMedia';
import Countdown from 'react-count-down';

import './landingbase.less';
//import styles from './landingbase.less';

const propTypes = {
  data: PropTypes.object
};

const defaultProps = {
  data: {
    logo: '/lang-logo.png',
    title: 'Create Title!',
    description: 'Create Description'
  }
};

//Shema
//logo: '/lang-logo.png',
//title: 'Hello and a very warm welcome!',
//description: 'We are a customer-service oriented team of web developers committed to the highest quality of our work and we stand behind it.',
//video: '/media/videobg.mp4',
//img: '/media/billionphotos.jpg',
//down: '#AboutContainer'
//Countdown: ''
//let OPTIONS = { endDate: '06/03/2018 10:12 AM', prefix: 'App started!' }

class LandingBase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itstyle: this.props.data.itstyle || null,
      active: null,
      class: this.props.data.class || 'text-center',
      logowidth: this.props.data.logowidth || '240px',
      logospace: this.props.data.logospace || '0 auto',
      containerMediaOpacity: this.props.data.containerMediaOpacity || '1',
      containerMediaClass: this.props.data.containerMediaClass || 'backdrop'
    };
  }

  _renderLogo () {
    if (!this.props.data.logo) { return null; }
    var style = {
      margin: this.state.logospace
    };
    return (
      <a href="/" className="lang-logo" style={style}>
        <img src={this.props.data.logo} width={this.state.logowidth} />
      </a>
    );
  }

  _renderTitle () {
    if (!this.props.data.title) { return null; }
    return (
      <h1>{this.props.data.title}</h1>
    );
  }

  _renderDesc () {
    if (!this.props.data.description) { return null; }
    return (
      <p>{this.props.data.description}</p>
    );
  }

  _renderVideoBg () {
    if (!this.props.data.video) { return null; }
    return (
      <ContainerMedia video={this.props.data.video} />
    );
  }

  _renderImgBg () {
    if (!this.props.data.img) { return null; }
    return (
      <ContainerMedia
        img={this.props.data.img}
        opacity={this.state.containerMediaOpacity}
        class={this.state.containerMediaClass}
      />
    );
  }

  _renderDown () {
    if (!this.props.data.down) { return null; }
    return (
      <a href={this.props.data.down} className="down"></a>
    );
  }

  _renderCountdown () {
    if (!this.props.data.countdown) { return null; }
    let OPTIONS = this.props.data.countdown;
    return (
      <div className="countdown-wr">
        <Countdown options={OPTIONS} />
      </div>
    );
  }

  _renderInvite () {
    if (!this.props.data.invite) { return null; }
    return (
      <form className="invite">
        <div className="form-group">
          <label>{this.props.data.invite}</label>
          <input type="email" className="form-control" placeholder="Email address" />
        </div>
      </form>
    );
  }

  render() {
    return (
      <div className={'landing-base ' + this.state.class} style={this.state.itstyle}>
        {this._renderVideoBg()}
        {this._renderImgBg()}
        <div className="container">
          {this._renderLogo()}
          {this._renderTitle()}
          {this._renderDesc()}
          {this._renderCountdown()}
          {this._renderInvite()}
        </div>
        {this._renderDown()}
      </div>
    );
  }
}

LandingBase.propTypes = propTypes;
LandingBase.defaultProps = defaultProps;

export default LandingBase;
