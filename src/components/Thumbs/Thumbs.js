import React, { PropTypes }  from 'react';
import ContainerMedia from '../../elements/ContainerMedia/ContainerMedia';
import BaseThumb from './BaseThumb';
import OneThumb from './OneThumb';

import './thumbs.less';

const propTypes = {
  data: PropTypes.object,
  intid: PropTypes.string
};

const defaultProps = {
  data: {
    role: "auto",
  },
  intid: null
};

class Thumbs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itstyle: this.props.data.itstyle || null,
      active: null,
      role: this.props.data.role || 'auto',
      containerMediaOpacity: this.props.data.containerMediaOpacity || '1',
      containerMediaClass: this.props.data.containerMediaClass || 'backdrop',
    };
  }

  _renderTitle () {
    if (!this.props.data.catTitle) { return null; }
    return (
      <h2>
        <span>{this.props.data.catTitle}</span>
      </h2>
    );
  }

  _renderDesc () {
    if (!this.props.data.catDescription) { return null; }
    return (
      <p>{this.props.data.catDescription}</p>
    );
  }

  //_renderImgBg () {
  //  if (!this.props.data.img) { return null; }
  //  return (
  //    <ContainerMedia
  //      img={this.props.data.img}
  //      opacity={this.state.containerMediaOpacity}
  //      class={this.state.containerMediaClass}
  //    />
  //  );
  //}

  _renderImgBg () {
    if (!this.props.data.img) { return null; }
    return (
      <ContainerMedia
        img={this.props.data.img}
        size="inherit"
        repeat="repeat"
        opacity={this.state.containerMediaOpacity}
      />
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
          <BaseThumb key={item.id} img={item.img} caption={item.text} col={item.col} />
        );
      }
      if (this.state.role == 'centered') {
        return (
          <OneThumb
            key={item.id}
            img={item.img}
            caption={item.text}
            col={item.col}
            size={item.size}
            link={item.link} 
          />
        );
      }
    });
    return (thumbslist ? (<div className="row">{thumbslist}</div>) : null);
  }

  _renderWrap () {
    if (!this.props.data.items) { return null; }
    return (
      <div className={"container-fluid thumbs role-" + this.state.role} style={this.state.itstyle} id={this.props.intid}>
        {this._renderImgBg()}
        <div className="container">
          {this._renderTitle()}
          {this._renderDesc()}
        </div>
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
