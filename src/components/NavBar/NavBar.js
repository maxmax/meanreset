import React, { PropTypes } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router'

import './navbar.less';

const propTypes = {
  data: PropTypes.array
};

const defaultProps = {
  data: [
    {
      title: 'Home',
      url: '/'
    }, {
      title: 'About',
      url: '/about'
    }, {
      title: 'Privacy policy',
      url: '/privacy'
    }, {
      title: 'Terms of Service',
      url: '/terms'
    }
  ]
};

class NavLink extends React.Component {
  render() {
    return (
      <Link {...this.props} activeClassName="active"/>
    );
  }
}

export default class NavBar extends React.Component {

  _renderItemsMap () {
    if (!this.props.data) { return null; }
    const listItems = this.props.data.map((list, index) =>
      <li key={`img-${index}`} >
        <NavLink to={list.url}>{list.title}</NavLink>
      </li>
    );
    return (
      <ul className="nav navbar-nav" role="nav">{listItems}</ul>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-inverse">
        <div className="container">
          { this._renderItemsMap() }
        </div>
      </nav>
    );
  }

}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
