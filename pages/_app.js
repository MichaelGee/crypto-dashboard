import { Global } from "@emotion/react";
import { ThemeProvider } from "../context/ThemeContext";
import { CoinProvider } from "../context/CoinContext";
import { PriceProvider } from "../context/PriceContext";
import { IconProvider } from "../context/IconContext";
import globalStyle from "../GlobalStyle";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <CoinProvider>
            <PriceProvider>
              <IconProvider>
                <Global styles={globalStyle} />
                <Component {...pageProps} />
              </IconProvider>
            </PriceProvider>
          </CoinProvider>
        </ThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
