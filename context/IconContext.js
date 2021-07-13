import { createContext, useState } from "react";


export const IconContext = createContext();

export const IconProvider = ({ children }) => {
    const [icon, setIcon] = useState('');
    return <IconContext.Provider value={[icon, setIcon]}>{children}</IconContext.Provider>;
  };


  