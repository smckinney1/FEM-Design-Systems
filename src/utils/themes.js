import { neutral, primary } from './colors';
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
  text: {
    primaryFont,
    typeScale,
  },
};
