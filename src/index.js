import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { darkTheme, defaultTheme, GlobalStyle } from './utils';
import {
  ErrorButton,
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  TertiaryButton,
  WarningButton,
} from './components/Buttons.styled';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
      <GlobalStyle />
      <header>
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          style={{ background: 'none', margin: '0 16px 24px', padding: '8px' }}
        >
          Toggle theme
        </button>
      </header>
      <main
        style={{ background: isDarkTheme ? defaultTheme.colors.primary : darkTheme.colors.primary }}
      >
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <TertiaryButton>Tertiary</TertiaryButton>
        <PrimaryButton disabled>Primary Disabled</PrimaryButton>
        <SecondaryButton disabled>Secondary Disabled</SecondaryButton>
        <TertiaryButton disabled>Tertiary</TertiaryButton>

        <hr />

        <PrimaryButton size="small">Small button</PrimaryButton>
        <PrimaryButton size="large">Large button</PrimaryButton>

        <hr />

        <ErrorButton>Error button</ErrorButton>
        <SuccessButton>Success button</SuccessButton>
        <WarningButton>Warning button</WarningButton>
      </main>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
