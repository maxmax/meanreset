import React, { PropTypes } from 'react';

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {
  className: ""
};

export default class LeftAside extends React.Component {

  render() {
    const {
      className,
      children,
    } = this.props;

    return (
      <div className={"left-aside " + className}>{children}</div>
    );
  }
}

LeftAside.propTypes = propTypes;
LeftAside.defaultProps = defaultProps;
