import styled, { css } from 'styled-components';

const Button = styled.button(
  ({ size, theme: { colors, text } }) => css`
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: ${text.typeScale.paragraph};
    padding: 8px 12px;
    transition: background-color 0.2s linear, color 0.2s linear; // Causes slight fade-in effect

    &:active {
      background: ${colors.primaryActive};
    }

    &:disabled {
      cursor: not-allowed;
    }

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      background: ${colors.primaryDisabled};
      color: ${colors.textInverted};
    }

    // NOTE: Taking a different approach to modifiers (such as "small") than the course here. styled-components-modifiers seems to have been abandoned and doesn't support v5+ of styled-components.
    ${size === 'small' &&
    css`
      font-size: ${text.typeScale.helperText};
      padding: 8px;
    `}

    ${size === 'large' &&
    css`
      font-size: ${text.typeScale.header3};
      padding: 12px 24px;
    `}
  `
);

/* **************** MAIN VARIANTS **************** */

export const PrimaryButton = styled(Button)`
  ${({ theme: { colors } }) => css`
    background: ${colors.primary};
    color: ${colors.textInverted};

    &:hover {
      background: ${colors.primaryHover};
    }
  `};
`;

export const SecondaryButton = styled(Button)`
  ${({ theme: { colors } }) => css`
    background: ${colors.ghost};
    box-shadow: inset 0 0 0 1px currentColor; // Creates INNER border
    color: ${colors.primary};

    &:hover {
      background: ${colors.ghostHover};
    }

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      background: ${colors.ghost};
      color: ${colors.ghostDisabled};
    }
  `};
`;

export const TertiaryButton = styled(Button)`
  ${({ theme: { colors } }) => css`
    background: ${colors.ghost};
    color: ${colors.primary};

    &:hover {
      background: ${colors.ghostHover};
    }

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      background: ${colors.ghost};
      color: ${colors.ghostDisabled};
    }
  `};
`;

/* **************** STATUS VARIANTS **************** */

export const ErrorButton = styled(Button)`
  ${({ theme: { colors, status } }) => css`
    background: ${status.errorColor};
    color: ${colors.text};

    &:active,
    &:hover {
      color: ${colors.textInverted};
    }

    &:active {
      background: ${status.errorColorActive};
    }

    &:hover {
      background: ${status.errorColorHover};
    }
  `};
`;

export const SuccessButton = styled(Button)`
  ${({ theme: { colors, status } }) => css`
    background: ${status.successColor};
    color: ${colors.text};

    &:active,
    &:hover {
      color: ${colors.textInverted};
    }

    &:active {
      background: ${status.successColorActive};
    }

    &:hover {
      background: ${status.successColorHover};
    }
  `};
`;

export const WarningButton = styled(Button)`
  ${({ theme: { colors, status } }) => css`
    background: ${status.warningColor};
    color: ${colors.text};

    &:active,
    &:hover {
      color: ${colors.textInverted};
    }

    &:active {
      background: ${status.warningColorActive};
    }

    &:hover {
      background: ${status.warningColorHover};
    }
  `};
`;
