import { green, neutral, primary, red, yellow } from './colors';
import { primaryFont, typeScale } from './typography';

export const defaultTheme = {
  colors: {
    primary: primary[400],
    primaryActive: primary[500],
    primaryDisabled: neutral[400],
    primaryHover: primary[300],
    ghost: neutral[100],
    ghostDisabled: neutral[400],
    ghostHover: primary[100],
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

export const darkTheme = {
  colors: {
    primary: neutral[100],
    primaryActive: neutral[300],
    primaryDisabled: neutral[400],
    primaryHover: neutral[200],
    ghost: neutral[100],
    ghostDisabled: neutral[400],
    ghostHover: primary[100],
    text: primary[300],
    textInverted: neutral[100],
  },
  status: { ...defaultTheme.status },
  text: { ...defaultTheme.text },
};
