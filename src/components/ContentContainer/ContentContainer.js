import React, { PropTypes }  from 'react';

import './contentcontainer.less';

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

class ContentContainer extends React.Component {

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

  render() {

    return (
      <div className='content-container text-center'>
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
}

ContentContainer.propTypes = propTypes;
ContentContainer.defaultProps = defaultProps;

export default ContentContainer;
