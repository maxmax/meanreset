import React, { PropTypes } from 'react'
import ReactDom from 'react-dom'
import { Link } from 'react-router'

import './stickyfooter.less';

const propTypes = {
  initialCopy: PropTypes.string,
  data: PropTypes.array
};

const defaultProps = {
  initialCopy: '© Copy...',
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

export default class StickyFooter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggle: null
    };
    this._itemOnClick = this._itemOnClick.bind(this);
  }

  _itemOnClick(event) {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  _renderItemsMap () {
    if (!this.props.data) { return null; }
    const listItems = this.props.data.map((list, index) =>
      <li key={`img-${index}`} >
        <NavLink to={list.url}>{list.title}</NavLink>
      </li>
    );
    return (
      <ul className="list-inline nav-list-inline" role="nav">{listItems}</ul>
    );
  }

  _renderCopy () {
    if (!this.props.initialCopy) { return null; }
    return (
      <span className="copy small">{this.props.initialCopy}</span>
    );
  }

  render() {
    return (
      <footer className="footer sticky-footer">
        <div className="footer-bar">
          <div className="container">
            { this._renderItemsMap() }
            { this._renderCopy() }
          </div>
        </div>
        <div className="body-footer"></div>
      </footer>
    );
  }

}

StickyFooter.propTypes = propTypes;
StickyFooter.defaultProps = defaultProps;
