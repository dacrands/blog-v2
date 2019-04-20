import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: `David Crandall`,
}

export default Navbar
