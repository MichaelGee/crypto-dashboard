// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp


import { Global } from '@emotion/react';
import {ThemeProvider} from '../context/ThemeContext'
import globalStyle from '../GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider>
     <Global styles={globalStyle} /> 
    <Component {...pageProps}/>
  </ThemeProvider>
  )
}

export default MyApp