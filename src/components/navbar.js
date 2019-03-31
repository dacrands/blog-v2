import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLanding: false
    }
  }

  componentDidMount() {
    console.log(window.location.pathname === "/")
    if(window.location.pathname === '/') {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 5) {
          this.setState({isLanding:true})
        } else {
          this.setState({isLanding:false})
        }
      })
    } else {
      this.setState({isLanding:true})
      if (document.querySelector('.header')) {
        document.querySelector('.header').style.paddingTop = `${this.refs.nav.clientHeight}px`
      }      
    }    
  }

  render() {
    return (
      <nav ref="nav" className={this.state.isLanding ? "navbar" : "navbar navbar--landing"}>
      <div className="navbar__container">  
        <Link
          to="/"
          className="navbar__link"
          activeClassName="navbar__link--active"
          // activeStyle={{borderBottom:'4px solid #2c2a2a'}}
        >Home</Link>
        {` `}
        <Link
          to="/blog"
          className="navbar__link"
          activeClassName="navbar__link--active"
          // activeStyle={{borderBottom:'4px solid #2c2a2a'}}
        >Blog</Link>
      </div>    
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
