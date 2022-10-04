import React from 'react'
import { AppProps } from 'next/app'

// Import Styles
import "../styles/global.css"
import '../styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp