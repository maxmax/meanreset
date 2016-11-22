import React, { PropTypes }  from 'react';
import ContainerMedia from '../../elements/ContainerMedia/ContainerMedia';

import './aboutcontainer.less';

const propTypes = {
  data: PropTypes.object
};

const defaultProps = {
  data: {
    title: 'Create Title!',
    description: 'Create Description',
    text: 'Create text',
    services: 'Create services'
  }
};

class AboutContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
  }

  _renderImgBg () {
    if (!this.props.data.img) { return null; }
    return (
      <ContainerMedia
        img={this.props.data.img}
        size="inherit"
        repeat="repeat"
        opacity="1"  
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
    if (!this.props.data.items) { return null; }
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

  _renderPromo () {
    if (!this.props.data.promo) { return null; }
    //?autoplay=1
    return (
      <iframe
        width="800"
        height="413"
        src={'https://www.youtube.com/embed/' + this.props.data.promo + ''}
      />
    );
  }

  render() {

    return (
      <div className='about-container text-center' id="AboutContainer">
        {this._renderImgBg()}
        <div className="container">
          {this._renderTitle()}
          {this._renderDesc()}
          {this._renderPromo()}
          {this._renderText()}
          {this._renderServices()}
          {this._renderList()}
        </div>
      </div>
    );
  }
}

AboutContainer.propTypes = propTypes;
AboutContainer.defaultProps = defaultProps;

export default AboutContainer;
