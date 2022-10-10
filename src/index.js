import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { defaultTheme, GlobalStyle } from './utils';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons';

const App = () => (
  <main>
    <PrimaryButton>Primary</PrimaryButton>
    <SecondaryButton>Secondary</SecondaryButton>
    <TertiaryButton>Tertiary</TertiaryButton>
    <PrimaryButton disabled>Primary Disabled</PrimaryButton>
    <SecondaryButton disabled>Secondary Disabled</SecondaryButton>
    <TertiaryButton disabled>Tertiary</TertiaryButton>
  </main>
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
