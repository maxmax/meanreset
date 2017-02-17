import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import LeftAside from './../../components/LeftAside';

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {
  className: ""
};

export default class AsideLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }


  render() {

    const instanceLeftAside = (
      <LeftAside>
        <h3>Components</h3>
        <p><Link to="jumbotron">Jumbotron</Link></p>
        <p><Link to="flex">Flex</Link></p>
        <p><Link to="section">Section</Link></p>
        <p><Link to="media">Media</Link></p>
        <p><Link to="buttons">Buttons</Link></p>
        <h3>Layout</h3>
        <p><Link to="/">Home</Link></p>
        <p><Link to="about">About</Link></p>
        <p><Link to="news">News</Link></p>
        <p><Link to="contacts">Contacts</Link></p>
      </LeftAside>
    );

    const {
      className,
      children,
    } = this.props;

    return (
      <div className={"aside-layout " + className} data-view={this.state.isToggleOn ? 'off' : 'on'}>
        <span className="collapse" onClick={this.handleClick}></span>
        {instanceLeftAside}
        {children}
      </div>
    );
  }
}

AsideLayout.propTypes = propTypes;
AsideLayout.defaultProps = defaultProps;
