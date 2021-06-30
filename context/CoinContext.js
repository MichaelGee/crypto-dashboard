import { createContext, useState } from "react";


export const CoinContext = createContext();

export const CoinProvider = ({ children }) => {
    const [coinName, setCoinName] = useState('bitcoin');
    return <CoinContext.Provider value={[coinName, setCoinName]}>{children}</CoinContext.Provider>;
  };


  