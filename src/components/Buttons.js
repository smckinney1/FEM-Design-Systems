import styled, { css } from 'styled-components';

const Button = styled.button(
  ({ theme: { colors, text } }) => css`
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
  `
);

export const PrimaryButton = styled(Button)`
  ${({ theme: { colors } }) => css`
    background: ${colors.primary};
    color: ${colors.textInverted};

    &:hover {
      background: ${colors.primaryHover};
    }

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      background: ${colors.primaryDisabled};
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
