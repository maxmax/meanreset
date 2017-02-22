import React, { PropTypes } from 'react';

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {
  className: ""
};

export default class Section extends React.Component {

  render() {
    const {
      className,
      children,
    } = this.props;

    return (
      <section className={"container " + className}>{children}</section>
    );
  }
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
