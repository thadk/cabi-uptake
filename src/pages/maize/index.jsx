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
          height="850"
          frameBorder="0"
          src="https://uploads.knightlab.com/storymapjs/6bca96d48bde1e37b34dcf8e8f2e5709/cabi-maize/index.html"
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
