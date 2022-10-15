import { animated, useSpring } from '@react-spring/web';
import styled, { css } from 'styled-components';

import { CloseIcon, Illustrations } from '../assets';
import { PrimaryButton } from './Buttons';

/*
  NOTE: In a real project, I would separate the styles in a .styled.js file.
  The modal in a design system would be generalized and not so specific as
  "SignUpModal" -> that would be an implementation of a generic modal.
*/

const Container = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    background: ${colors.formBackground};
    border-radius: 2px;
    box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.25);
    position: relative;

    height: 580px;
    width: 800px;
  `
);

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 40px;
  right: 40px;

  height: 24px;
  width: 24px;
`;

const SignUpHeader = styled.h2`
  font-size: ${({ theme: { text } }) => text.typeScale.header2};
`;

const SignUpText = styled.p`
  font-size: ${({ theme: { text } }) => text.typeScale.paragraph};
  max-width: 70%;
`;

export const SignUpModal = ({ isOpen, setIsOpen }) => {
  // TODO: Not accessible (doesn't hide from keyboard or screen reader). Demonstration only.
  const styles = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-200%)',
  });

  return (
    <animated.div style={styles}>
      <Container>
        <img src={Illustrations.SignUp} alt="" />
        <SignUpHeader>Sign up!</SignUpHeader>
        <SignUpText>Sign up today to receive access to our awesome app.</SignUpText>
        <PrimaryButton>Sign up</PrimaryButton>
        <CloseButton aria-label="Close modal" onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </CloseButton>
      </Container>
    </animated.div>
  );
};
