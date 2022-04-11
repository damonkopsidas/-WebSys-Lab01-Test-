import { createTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#bb80ff',
      main: '#66468a',
      dark: '#51386e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#c18bfc',
      main: '#c18bfc',
      dark: '#9636ff',
      contrastText: '#000',
    },
      openTitle: '#3f4771',
      protectedTitle: '#ae6ef5',
      type: 'light'
    }
  });

  export default theme
