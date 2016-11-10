import React from 'react'
import { Link } from 'react-router'
import Home from './Home'
import NavBar from '../components/NavBar/NavBar'
import StickyFooter from '../components/StickyFooter/StickyFooter'

export default React.createClass({
  render() {
    return (
      <div>
        <NavBar />
        <br />
        <br />
        <div className="container">
          {this.props.children || <Home />}
        </div>
        <StickyFooter />
      </div>
    )
  }
})
