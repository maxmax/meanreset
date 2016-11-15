import React, { PropTypes }  from 'react';
import BaseThumb from './BaseThumb';
import OneThumb from './OneThumb';

import './thumbs.less';

const propTypes = {
  data: PropTypes.object
};

const defaultProps = {
  data: {
    catTitle: 'Empty category',
    role: "auto"
  }
};

class Thumbs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: null,
      role: this.props.data.role || 'auto'
    };
  }

  _renderTitle () {
    if (!this.props.data.catTitle) { return null; }
    return (
      <h2>{this.props.data.catTitle}</h2>
    );
  }

  _renderData () {
    //if (!this.props.data.items) { return null; }
    if (!this.props.data.items) {
      return (
        <div className="row">
          <div className='col-md-12 text-center'>Сategory is empty!</div>
        </div>
      );
    }
    const { items } = this.props.data;
    const thumbslist = items.map((item, index) => {
      if (this.state.role == 'auto') {
        return (
          <BaseThumb key={item.id} img={item.img} caption={item.text} />
        );
      }
      if (this.state.role == 'centered') {
        return (
          <OneThumb key={item.id} img={item.img} caption={item.text} />
        );
      }
    });
    return (thumbslist ? (<div className="row">{thumbslist}</div>) : null);
  }

  _renderWrap () {
    if (!this.state.role) { return null; }
    return (
      <div className={"container-fluid thumbs role-" + this.state.role}>
        {this._renderTitle()}
        {this._renderData()}
      </div>
    );
  }

  render() {
    return this._renderWrap();
  }
}

Thumbs.propTypes = propTypes;
Thumbs.defaultProps = defaultProps;

export default Thumbs;
