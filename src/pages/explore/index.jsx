import React from 'react'

class Profile extends React.Component {
  componentDidMount() {
  }

  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <iframe
          width="100%"
          height="850"
          frameBorder="0"
          src="https://thadk.carto.com/builder/11f8e14a-6633-4aee-aabe-bb1dd862168c/embed"
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
