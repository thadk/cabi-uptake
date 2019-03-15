import React from 'react'
import Link from 'gatsby-link'

class SiteNavi extends React.Component {
  render() {
    const { location, title, short_title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
        <div className="container">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0 d-none d-md-block">{title}</h1>
            <h1 className="navbar-brand d-md-none">CABI UPTAKE</h1>
          </Link>
          <div className="navbar-nav-scroll float-right mr-md-2">
            <ul className="navbar-nav bd-navbar-nav flex-row  float-right">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  <i class="fa fa-book" />&nbsp; Home
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/explore/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/explore/" className="nav-link">
                  <i class="fa fa-map-marker" />&nbsp; Explore
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/maize/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/maize/" className="mb-0 d-none d-lg-block nav-link">
                  <i class="fa fa-newspaper-o" />&nbsp; Maize Story
                </Link>
                <Link to="/maize/" className="nav-link d-lg-none">
                  <i class="fa fa-newspaper-o" />&nbsp; Maize
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/maize-explore/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link
                  to="/maize-explore/"
                  className="mb-0 d-none d-md-block d-sm-block d-lg-block nav-link"
                >
                  <i class="fa fa-map-marker" />&nbsp; Maize Explore
                </Link>
                <Link to="/maize-explore/" className="nav-link d-sm-none">
                  <i class="fa fa-map-marker" />&nbsp; Explore
                </Link>
              </li>
              <li className="nav-item  mb-0 d-none d-xl-block">
                <a href="https://cabi-silt.netlify.com/" className="nav-link">
                  <i class="fa fa-link" />&nbsp; Jump to SILT
                </a>
              </li>
              <li className="nav-item  mb-0 d-none d-lg-block d-xl-none">
                <a href="https://cabi-silt.netlify.com/" className="nav-link">
                  <i class="fa fa-link" />&nbsp; SILT
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="http://africasoilhealth.cabi.org/tools/communication-tools/"
                  className="nav-link"
                >
                  <i class="fa fa-link" />&nbsp; CABI
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default SiteNavi
