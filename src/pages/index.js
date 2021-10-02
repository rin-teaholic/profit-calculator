import * as React from 'react'
import App from '../components/App'

const IndexPage = () => {

  // Change Body Style
  const body = document.querySelector('body')
  body.style.margin = '0'

  return (
    <App />
  )
}

export default IndexPage
