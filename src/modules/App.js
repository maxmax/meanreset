import React from 'react'
import { Link } from 'react-router'
import Home from './Home'
//import NavBar from '../components/NavBar/NavBar';
//import FooterContainer from '../components/FooterContainer/FooterContainer';

export default React.createClass({
  render() {
    return (
      <div>
        {this.props.children || <Home />}
      </div>
    )
  }
})
//{this.props.children || <Home data={this.props.route.indata} />}
//{this.props.children || this.props.route.incomponents}
//<StickyFooter />
