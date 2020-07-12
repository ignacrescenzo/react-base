// https://material-ui.com/es/customization/theming/
// https://material-ui.com/es/customization/palette/
// https://material-ui.com/es/customization/components/#global-theme-override

import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8A22D2'
    }
  },
  typography: {
    // fontFamily: 'Arial' acá cambiaríamos la typografia
  }
})

export { theme }
