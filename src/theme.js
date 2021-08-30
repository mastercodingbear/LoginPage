import { responsiveFontSizes } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles'

// colors
const primary = "#227C72";

// font colors
const textPrimary = "#495057";
const textSecondary = "#74788D";

const theme = createTheme({
  palette: {
    primary: { main: primary },
    text: {
      primary: textPrimary,
      secondary: textSecondary,
    }
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif",
    h4: {
      fontWeight: 500,
      fontSize: 16
    },
    h5: {
      fontWeight: 500,
      fontSize: 13
    },
  }
});

export default responsiveFontSizes(theme);
