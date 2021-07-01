import { Global } from "@emotion/react";
import { ThemeProvider } from "../context/ThemeContext";
import { CoinProvider } from "../context/CoinContext";
import globalStyle from "../GlobalStyle";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CoinProvider>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
        </CoinProvider>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
    </>
  );
}

export default MyApp;
