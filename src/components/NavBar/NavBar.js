import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';

import './navbar.less';

const propTypes = {
  data: PropTypes.array
};

const defaultProps = {
  data: []
};

class NavHref extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      int: (<a href={this.props.to}>{this.props.children}</a>)
    };
  }

  render() {
    return this.state.int;
  }
}

class NavLink extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      link: this.props.role === 'link' ? (<Link {...this.props} activeClassName="active"/>) : (<NavHref {...this.props} />)
    };
  }

  render() {
    return this.state.link;
  }
}

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: null,
      role: this.props.data.role || null
    };
  }

  _renderItemsMap () {
    if (!this.props.data[0]) { return null; }

    const listItems = this.props.data.map((list, index) =>
      <li key={`img-${index}`} >
        <NavLink to={list.url} role={list.role}>{list.title}</NavLink>
      </li>
    );

    return (
      <nav className="navbar navbar-default navbar-inverse navbar-fixed-top navbar-center">
        <div className="container">
          <ul className="nav navbar-nav" role="nav">{listItems}</ul>
        </div>
      </nav>
    );
  }

  render() {
    return this._renderItemsMap();
  }

}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
