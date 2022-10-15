import { PrimaryButton } from './Buttons';

// TODO: see if can get MDX working with controls for better documentation
// NOTE: The component API set up during this course seems to be a pain to get into Storybook (having a separate component for every button variant instead of using props). This wouldn't have been an issue in 2020 when the course was created, but is an issue  For academic purposes, I'm going to pretend here that "Primary Button" is the only button type we have.
export default {
  title: 'Design System/Primary Button',
  component: PrimaryButton,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'large', undefined],
    },
  },
};

const Template = (args) => <PrimaryButton {...args}>Primary Button</PrimaryButton>;

export const Basic = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
