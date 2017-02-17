import React, { PropTypes } from 'react';

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {
  className: ""
};

export default class Col extends React.Component {

  render() {
    const {
      className,
      children,
    } = this.props;

    return (
      <div className={"col " + className}>{children}</div>
    );
  }
}

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;
