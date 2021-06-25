// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import { Global } from "@emotion/react";
import { ThemeProvider } from "../context/ThemeContext";
import globalStyle from "../GlobalStyle";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
    </>
  );
}

export default MyApp;
