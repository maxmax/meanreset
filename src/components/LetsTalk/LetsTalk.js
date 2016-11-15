import React, { PropTypes }  from 'react';

import './letstalk.less';

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

class LetsTalk extends React.Component {

  constructor(props) {
    super(props);
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

  render() {

    return (
      <div className='lets-talk text-center'>
        {this._renderImgBg()}
        <div className="container">
          {this._renderTitle()}
          {this._renderDesc()}
          {this._renderBtn()}
        </div>
      </div>
    );
  }
}

LetsTalk.propTypes = propTypes;
LetsTalk.defaultProps = defaultProps;

export default LetsTalk;
