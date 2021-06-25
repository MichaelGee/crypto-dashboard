import axios from "axios";

// Create axios instance for api calls

const api = axios.create({
  baseURL: "https://api.nomics.com/v1/",
  timeout: 20000,
});

const key = process.env.NEXT_PUBLIC_API_KEY;
const currencies = "BTC,ETH,XRP,BNB,DOGE,BCH,LCT,XLM,EOS,ADA,DASH,XTZ,SOL,TRX,XMR,BSV,DOT,USDT,DAI,NEO,HT,GRT,WAVES,CEL,ZEC,BTG,CELO,STX";
const extraParams = "interval=1h&per-page=100&page=1"

// const getCurrency = () => api.get(`currencies`);
export const getCurrencyTicker = (id) => api.get(`currencies/ticker?key=${key}&ids=${currencies}&${extraParams}`);



