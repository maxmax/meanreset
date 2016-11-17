import React, { PropTypes }  from 'react';

import './testimonials.less';

const propTypes = {
  data: PropTypes.object
};

const defaultProps = {
  data: {
    title: 'Create Title!',
    description: 'Create Description'
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
      active: 2
    };
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
    var style = {
      backgroundImage: 'url(' + this.props.data.img + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    };
    return (
      <div className="container-img" style={style}></div>
    );
  }

  _renderBtn () {
    if (!this.props.data.btn) { return null; }
    return (
      <a className="btn btn-default" href="#" role="button">{this.props.data.btn}</a>
    );
  }

  _renderData () {
    if (!this.props.data.items) { return null; }
    const { items } = this.props.data;
    const objlist = items.map((item, index) => {
      return (
        <div key={item.id} className="slide">
          <blockquote>
            <p>{item.text}</p>
            <small>{item.author}</small>
          </blockquote>
        </div>
      );
    });
    return (objlist ? (<div className="slides">{objlist}</div>) : null);
  }

  _renderSlide () {
    if (!this.props.data.items) { return null; }
    const current = this.props.data.items[this.state.active];
    return (
      <div className="slides">
        <div className="slide-prev"></div>
        <div className="slide-next"></div>
        <div className="slide">
          <blockquote>
            <p>{current.text}</p>
            <small>{current.author}</small>
          </blockquote>
        </div>
      </div>
    );
  }

  render() {
    console.log(this.props.data.items[2]);
    console.log(this.state.active);
    return (
      <div className='testimonials text-center'>
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

//{this._renderData()}
//{this._renderBtn()}

Testimonials.propTypes = propTypes;
Testimonials.defaultProps = defaultProps;

export default Testimonials;
