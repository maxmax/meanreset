import React, { PropTypes }  from 'react';

const propTypes = {
  img: PropTypes.string,
  caption: PropTypes.string,
  col: PropTypes.string
};

const defaultProps = {
  img: '',
  caption: '',
  col: ''
};

class BaseThumb extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img || null,
      caption: this.props.caption || null,
      col: this.props.col || 'col-xs-12 col-sm-6 col-lg-3'
    };
  }

  _renderImg (el) {
    if (!el) {
      //var style = ref this... svg color
      //var style = {
      //  backgroundImage: 'url(./landscape.svg)',
      //  backgroundRepeat: 'no-repeat',
      //  backgroundPosition: 'center center',
      //  backgroundSize: '80px'
      //};
      return (
        <div className="thumbs-img thumbs-img-empty"></div>
      );
    }
    var style = {
      backgroundImage: 'url(' + el + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    };
    return (
      <div className="thumbs-img" style={style}></div>
    );
  }

  _renderCaption () {
    if (!this.state.caption) { return null; }
    return (
      <div className="caption">
        {this.state.caption}
      </div>
    );
  }

  render() {
    return (
      <div className={this.state.col}>
        <div className='thumb'>
          {this._renderImg(this.state.img)}
          {this._renderCaption()}
        </div>
      </div>
    );
  }
}

BaseThumb.propTypes = propTypes;
BaseThumb.defaultProps = defaultProps;

export default BaseThumb;
