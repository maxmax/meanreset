import React, { PropTypes }  from 'react';

import './containermedia.less';

const propTypes = {
  video: PropTypes.string,
  img: PropTypes.string
};

const defaultProps = {
  video: "",
  img: ""
};

class ContainerMedia extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: this.props.size || 'cover',
      repeat: this.props.repeat || 'no-repeat',
      position: this.props.position || 'center center',
      opacity: this.props.opacity || '0.5',
      class: this.props.class || 'auto'
    };
  }

  _renderVideo () {
    if (!this.props.video) { return null; }
    return (
      <div className={"container-video " + this.state.class}>
        <video className="video" autoPlay="autoplay" muted loop>
          <source src={this.props.video} type="video/mp4" />
        </video>
      </div>
    );
  }

  _renderImg () {
    if (!this.props.img) { return null; }
    var style = {
      backgroundImage: 'url(' + this.props.img + ')',
      backgroundRepeat: this.state.repeat,
      backgroundPosition: this.state.position,
      backgroundSize: this.state.size,
      opacity: this.state.opacity
    };
    return (
      <div className={"container-img " + this.state.class} style={style}></div>
    );
  }

  render() {
    return (
      <div>
        {this._renderVideo()}
        {this._renderImg()}
      </div>
    );
  }
}

ContainerMedia.propTypes = propTypes;
ContainerMedia.defaultProps = defaultProps;

export default ContainerMedia;
