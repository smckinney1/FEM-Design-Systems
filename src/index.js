import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { defaultTheme, GlobalStyle } from './utils';
import {
  // Buttons
  // ErrorButton,
  PrimaryButton,
  // SecondaryButton,
  // SuccessButton,
  // TertiaryButton,
  // WarningButton,

  // Modals
  SignUpModal,
} from './components';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header>
        <PrimaryButton
          onClick={() => setIsModalOpen(!isModalOpen)}
          size="large"
          style={{ marginBottom: '24px' }}
        >
          Toggle modal
        </PrimaryButton>
      </header>
      <main>
        <SignUpModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />

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
      </main>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
