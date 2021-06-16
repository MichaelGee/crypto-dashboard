import React, {createContext, useContext} from 'react';

import {ThemeProvider as EmotionThemeProvider} from '@emotion/react';
import { theme } from '../theme';



const defaultContextData = {
    dark: false,
    toggle: () => {},
  };

  const ThemeContext = createContext(defaultContextData);
  const useTheme = () => useContext(ThemeContext);


  const useEffectDarkMode = () => {
    const [themeState, setThemeState] = React.useState({
      dark: false,
      hasThemeMounted: false,
    });
    React.useEffect(() => {
      let dark = true;
      const lsDark = JSON.parse(localStorage.getItem('dark'));
      if (lsDark !== null) {
        dark = lsDark;
      }
      setThemeState(v => ({ ...v, dark, hasThemeMounted: true }));
    }, []);
  
    return [themeState, setThemeState];
  };




const ThemeProvider =({children})=>{

    const [themeState, setThemeState] = useEffectDarkMode();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem('dark', JSON.stringify(dark));
    setThemeState(v => ({ ...v, dark }));
  };

  const computedTheme = themeState.dark ? theme('dark') : theme('light');
  

    return(
        <EmotionThemeProvider theme={computedTheme}>
         <ThemeContext.Provider value={{
          dark: themeState.dark,
          toggle,
          ...computedTheme
        }}>
         {children}
         </ThemeContext.Provider>
      </EmotionThemeProvider>
    )
}

export {ThemeProvider, useTheme}