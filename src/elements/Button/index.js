import React, { PropTypes } from 'react';

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {
  className: "_auto"
};

export default class Button extends React.Component {

  render() {
    const {
      className,
      children,
    } = this.props;

    return (
      <button className={"button " + className}>{children}</button>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
