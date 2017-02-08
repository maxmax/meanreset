import React, { PropTypes } from 'react';

const propTypes = {
  title: PropTypes.string,
  modifiers: PropTypes.string,
  className: PropTypes.string
};

const defaultProps = {
  title: "",
  modifiers: "",
  className: ""
};

//export function getModifiersForDay(modifiers, day) {
//  return day ? Object.keys(modifiers).filter(key => modifiers[key](day)) : [];
//}

export default class Jumbotron extends React.Component {

  render() {
    const {
      title,
      modifiers,
      className,
      children,
    } = this.props;

    return (
      <div className={"jumbotron " + className}>{children}</div>
    );
  }
}

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;
