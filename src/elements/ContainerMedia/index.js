import React, { PropTypes }  from 'react';

const propTypes = {
  video: PropTypes.string,
  img: PropTypes.string,
  size: PropTypes.string,
  repeat: PropTypes.string,
  position: PropTypes.string,
  bgattachment: PropTypes.string,
  opacity: PropTypes.string,
  filter: PropTypes.string,
  className: PropTypes.string
};

const defaultProps = {
  video: "",
  img: "",
  size: "cover",
  repeat: "no-repeat",
  position: "center center",
  bgattachment: "fixed",
  opacity: "0.5",
  filter: "inherit",
  className: "auto"
};

export default class ContainerMedia extends React.Component {

  //To furthur simplify this code using ES7's property initializer
  //state = {
  //  defstate: this.props.title
  //};
  constructor(props) {
    super(props);
    this.state = { imageStatus: 'loading' };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'error' });
  }

  //refactor this!
  _renderVideo () {
    if (!this.props.video) { return null; }
    const {
      video,
      className
    } = this.props;
    return (
      <div className={"container-video " + className}>
        <video className="video" autoPlay="autoplay" muted loop>
          <source
            src={video}
            type="video/mp4"
          />
        </video>
      </div>
    );
  }

  _renderImg () {
    if (!this.props.img) { return null; }

    const {
      img,
      repeat,
      position,
      size,
      bgattachment,
      opacity,
      filter,
      className
    } = this.props;

    var style = {
      backgroundImage: 'url(' + img + ')',
      backgroundRepeat: repeat,
      backgroundPosition: position,
      backgroundSize: size,
      backgroundAttachment: bgattachment,
      opacity: opacity,
      filter: filter
    };
    return (
      <div
        className={"container-img " + className + " _" + this.state.imageStatus}
        style={style}
      >
        <img
          src={this.props.img}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
        />
      </div>
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
