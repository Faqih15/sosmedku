import React from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

function Adsense() {
  return (
    <div>
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1284097148769938"
        crossorigin="anonymous"></script>
        </Helmet>
    </div>
  )
}

export default Adsense