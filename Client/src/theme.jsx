// theme.js
import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
 
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          background: {
            main: '#fff',
          },
        
          neutral: {
            main: '#121D31',
          },
          primary: {
            main: '#121D31',
          },
        }
      : {
          // palette values for dark mode
          background: {
            main: '#121D31',
          },
         
          neutral: {
            main: '#fff',
          },
          primary: {
            main: '#fff',
          },
        }),
       
  },
  
});


// Context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem('mode') ? localStorage.getItem('mode') : 'light'
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return { theme, toggleColorMode: () => setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light')) };
};
