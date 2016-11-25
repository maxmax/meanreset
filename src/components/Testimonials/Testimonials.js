import React, { PropTypes }  from 'react';
import ContainerMedia from '../../elements/ContainerMedia/ContainerMedia';

import './testimonials.less';

const propTypes = {
  data: PropTypes.object
};

const defaultProps = {
  data: {
    title: 'Testimonials!',
    description: 'Testimonials Empty'
  }
};

//Shema
//title: 'Lets Talk About Your Disease',
//description: 'WE ARE READY TO WORK WITH YOU',
//img: '/media/billionphotos.jpg',
//btn: 'GET IN TOUCH'

class Testimonials extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itstyle: this.props.data.itstyle || null,
      active: 0,
      data: this.props.data.items[0] || null,
      class: this.props.data.class || 'text-center',
      containerMediaOpacity: this.props.data.containerMediaOpacity || '1',
      containerMediaClass: this.props.data.containerMediaClass || 'backdrop',
      disabled: {pointerEvents: 'none'}
    };
    this._newSlide = this._newSlide.bind(this);
  }

  _renderTitle () {
    if (!this.props.data.title) { return null; }
    return (
      <h2>{this.props.data.title}</h2>
    );
  }

  _renderDesc () {
    if (!this.props.data.description) { return null; }
    return (
      <p>{this.props.data.description}</p>
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

  _renderBtn () {
    if (!this.props.data.btn) { return null; }
    return (
      <a className="btn btn-default" href="#" role="button">{this.props.data.btn}</a>
    );
  }

  _newSlide(event, index) {
    this.setState({data: this.props.data.items[event] || this.props.data.items[0],});
  }

  _renderSlide () {

    if (!this.state.data) { return null; }
    const current = this.state.data;

    var disabled = null;
    if (current.id === 0) {
      var disabled = this.state.disabled;
    }

    return (
      <div className="slides">
        <div className="slide-prev" onClick={this._newSlide.bind(this, current.id - 1)} style={disabled}></div>
        <div className="slide-next" onClick={this._newSlide.bind(this, current.id + 1)}></div>
        <div className="slide">
          <div className="wrap">
            <blockquote>
              <p>{current.text}</p>
              <div className="author">{current.author}</div>
              <small>{current.position}</small>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }

  render() {

    return (
      <div className={'testimonials ' + this.state.class} style={this.state.itstyle}>
        {this._renderImgBg()}
        <div className="container-fluid">
          {this._renderTitle()}
          {this._renderDesc()}
          {this._renderSlide()}
        </div>
      </div>
    );
  }
}

Testimonials.propTypes = propTypes;
Testimonials.defaultProps = defaultProps;

export default Testimonials;
