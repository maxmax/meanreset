import React, { PropTypes }  from 'react';
import ContainerMedia from '../../elements/ContainerMedia/ContainerMedia';
import './contentcontainer.less';

const propTypes = {
  data: PropTypes.object
};

const defaultProps = {
  data: {}
};

class ContentContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: null,
      itstyle: this.props.data.itstyle || null,
      containerMediaSize: this.props.data.containerMediaSize || 'inherit',
      containerMediaRepeat: this.props.data.containerMediaRepeat || 'repeat',
      containerMediaOpacity: this.props.data.containerMediaOpacity || '1',
      containerMediaClass: this.props.data.containerMediaClass || 'backdrop'
    };
  }

  _renderImgBg () {
    if (!this.props.data.img) { return null; }
    console.log(this.state.containerMediaSize);
    return (
      <ContainerMedia
        img={this.props.data.img}
        size={this.state.containerMediaSize}
        repeat={this.state.containerMediaRepeat}
        opacity={this.state.containerMediaOpacity}
        class={this.state.containerMediaClass}
      />
    );
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

  _renderText () {
    if (!this.props.data.text) { return null; }
    return (
      <p>{this.props.data.text}</p>
    );
  }

  _renderServices () {
    if (!this.props.data.services) { return null; }
    return (
      <p>{this.props.data.services}</p>
    );
  }

  _renderList () {
    if (!this.props.data.items[0]) { return null; }
    const { items } = this.props.data;
    const objlist = items.map((item, index) => {
      return (
        <li key={index} className="slide">
          <p>{item.text}</p>
        </li>
      );
    });
    return (objlist ? (<ul className="list text-left">{objlist}</ul>) : null);
  }

  _renderWrapper () {
    if (!this.props.data.title) { return null; }
    return (
      <div className='content-container text-center' style={this.state.itstyle}>
        {this._renderImgBg()}
        <div className="container">
          {this._renderTitle()}
          {this._renderDesc()}
          {this._renderText()}
          {this._renderServices()}
          {this._renderList()}
        </div>
      </div>
    );
  }

  render() {
    return this._renderWrapper();
  }
}

ContentContainer.propTypes = propTypes;
ContentContainer.defaultProps = defaultProps;

export default ContentContainer;
