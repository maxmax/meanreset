import React, { PropTypes } from 'react';

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {
  className: ""
};

export default class FlexContainer extends React.Component {

  render() {
    const {
      className,
      children,
    } = this.props;

    return (
      <div className={"flex-container " + className}>{children}</div>
    );
  }
}

FlexContainer.propTypes = propTypes;
FlexContainer.defaultProps = defaultProps;
