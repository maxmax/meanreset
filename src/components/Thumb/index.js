import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Glyphicon } from 'react-bootstrap';

const propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string
}

const defaultProps = {
  title: "",
  link: "",
  image: "",
  size: "160px",
  className: ""
}

export default class Thumb extends Component {

  _renderImg (el, s) {
    if (!el) { return null; }
    var style = {
      backgroundImage: 'url(' + el + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: '' + s + ''
    };
    return (
      <div className="thumbs-img" style={style}></div>
    );
  }

  _renderCaption (el) {
    if (!el) { return null; }
    return (
      <div className="caption"><div>{el}</div></div>
    );
  }

  _renderLink (el, title) {
    if (!el) { return null; }
    return (
      <Link to={el} title={title}></Link>
    );
  }

  render() {

    const { title, link, className, price, image, size, children } = this.props;

    return (
      <div className={"thumb " + className}>
        {this._renderImg(image, size)}
        {this._renderCaption(children)}
        {this._renderLink(link, title)}
      </div>
    );
  }
}

Thumb.propTypes = propTypes;
Thumb.defaultProps = defaultProps;
