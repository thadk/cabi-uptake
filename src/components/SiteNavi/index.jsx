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
            <h1 className="navbar-brand d-md-none">FRI SILT</h1>
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
                <Link to="/maize/" className="nav-link">
                  <i class="fa fa-newspaper-o" />&nbsp; Maize Story
                </Link>
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
