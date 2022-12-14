import { green, neutral, primary, red, yellow } from './colors';
import { primaryFont, typeScale } from './typography';

export const defaultTheme = {
  colors: {
    formBackground: neutral[100],
    ghost: neutral[100],
    ghostDisabled: neutral[400],
    ghostHover: primary[100],
    primary: primary[400],
    primaryActive: primary[500],
    primaryDisabled: neutral[400],
    primaryHover: primary[300],
    text: neutral[600],
    textInverted: neutral[100],
  },

  // TODO: I don't love keeping this separate from other colors.
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
  text: {
    primaryFont,
    typeScale,
  },
};
