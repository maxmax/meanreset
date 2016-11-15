import React, { PropTypes }  from 'react';

import './aboutcontainer.less';

const propTypes = {
  data: PropTypes.object
};

const defaultProps = {
  data: {
    title: 'Create Title!',
    description: 'Create Description'
  }
};

class AboutContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: null
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

  render() {

    return (
      <div className='about-container text-center' id="AboutContainer">
        <div className="container">
          {this._renderTitle()}
          {this._renderDesc()}
        </div>
      </div>
    );
  }
}

AboutContainer.propTypes = propTypes;
AboutContainer.defaultProps = defaultProps;

export default AboutContainer;
