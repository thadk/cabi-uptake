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
          src="https://thadk.carto.com/builder/ff08228a-c68e-46a7-a286-2877e51c0027/embed"
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
