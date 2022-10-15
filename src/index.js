import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { defaultTheme, GlobalStyle } from './utils';
import {
  // Buttons
  // ErrorButton,
  // PrimaryButton,
  // SecondaryButton,
  // SuccessButton,
  // TertiaryButton,
  // WarningButton,

  // Modals
  SignUpModal,
} from './components';

const App = () => (
  <main>
    {/* <PrimaryButton>Primary</PrimaryButton>
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

    <hr /> */}

    <SignUpModal />
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
