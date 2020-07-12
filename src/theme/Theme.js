// https://material-ui.com/es/customization/theming/
// https://material-ui.com/es/customization/palette/
// https://material-ui.com/es/customization/components/#global-theme-override
// https://material.io/design/color/text-legibility.html#text-backgrounds
// https://material-ui.com/es/customization/color/
import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8A22D2'
    },
    text: {
      primary: grey[900]
    }
  },
  typography: {
    // fontFamily: 'Arial' acá cambiaríamos la typografia
  }
})

export { theme }
