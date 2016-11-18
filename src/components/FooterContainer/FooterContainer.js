import React, { PropTypes }  from 'react';

import './footercontainer.less';

const propTypes = {
  data: PropTypes.object
};

const defaultProps = {
  data: {}
};

class FooterContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  _renderWrapper () {
    if (!this.props.data.text) { return null; }
    return (
      <div className='footer-container text-center'>
        <p>{this.props.data.text}</p>
      </div>
    );
  }

  render() {
    return this._renderWrapper();
  }
}

FooterContainer.propTypes = propTypes;
FooterContainer.defaultProps = defaultProps;

export default FooterContainer;
