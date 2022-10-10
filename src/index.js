import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { defaultTheme, GlobalStyle } from './utils';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons';

const App = () => (
  <>
    <PrimaryButton>Primary</PrimaryButton>
    <PrimaryButton disabled>Primary Disabled</PrimaryButton>
    <SecondaryButton>Secondary</SecondaryButton>
    <SecondaryButton disabled>Secondary Disabled</SecondaryButton>
    <TertiaryButton>Tertiary</TertiaryButton>
    <TertiaryButton disabled>Tertiary</TertiaryButton>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
