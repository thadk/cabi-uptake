import React from 'react'

class Profile extends React.Component {
  componentDidMount() {}

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <iframe
          width="100%"
          height="790"
          frameBorder="0"
          src="https://uploads.knightlab.com/storymapjs/1539e76e9602ff2d3f624d963161c708/uptake-maize/index.html"
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          oallowfullscreen="true"
          msallowfullscreen="true"
        />
      </div>
    )
  }
}

export default Profile
