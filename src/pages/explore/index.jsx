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
          src="https://thadk.carto.com/builder/afe4eac2-2fa6-4e91-bbca-5e9ad6b6551a/embed"
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
