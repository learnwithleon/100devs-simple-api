import React from 'react'
import { Helmet } from 'react-helmet'

const TITLE = 'New Groove'

class Helm extends React.PureComponent {
  render () {
    return (
      <>
        <Helmet>
          <title>{ TITLE }</title>
          <meta property="og:image" content="https://www.creativefabrica.com/wp-content/uploads/2019/04/Headphone-Icon-Vector-by-The-Designer-Bd-580x387.jpg" ></meta>
          <meta property="og:description" content="Find songs based off Artist, BPM, Tempo and more." />

          <meta property="og:url"content="http://https://newgroove.netlify.app/" />

          <meta property="og:title" content="New Groove" />
        </Helmet>
      </>
    )
  }
}

export default Helm