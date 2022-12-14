import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material';
import Router from './routes/router'
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const theme = createTheme({
    palette: {
			mode: 'dark',
      primary: {
        main: '#04bf8a',
        light: '#41CAA3',
        dark: '#038C65',
        contrastText: '#fffefc',
      },
      background: {
        default: '#172632',
        paper: '#1D2D44',
      },
    },
    typography: {
      allVariants: {
        color: '#fffefc',
      }
    },
    components: {
      MuiTextField: {
        defaultProps: {
          variant: 'filled',
          size: 'small',
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          }
        },
        defaultProps: {
          variant: 'contained',
          size: 'medium',
      }
    },
  },
  });
return (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Router/>
    </ThemeProvider>
  </StyledEngineProvider>
  )
}

export default App
