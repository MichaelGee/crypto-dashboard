import { createContext, useState } from "react";


export const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
    const [cointPrice, setCoinPrice] = useState('');
    return <PriceContext.Provider value={[cointPrice, setCoinPrice]}>{children}</PriceContext.Provider>;
  };


  