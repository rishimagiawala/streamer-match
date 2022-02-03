import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';

const theme = createTheme({
  
});
function MyApp({ Component, pageProps }: AppProps) {
  return( <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
  
  )
}

export default MyApp
