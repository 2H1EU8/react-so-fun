import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../components/common/Button';
import { ButtonType } from '../../../enums/enum';



const meta = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: { control: 'inline-radio', options: ['primary', 'secondary', 'success', 'warning', 'error'] },
    disabled: {control: 'inline-radio', options: [true, false]},
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    theme: ButtonType.PRIMARY,
    text: 'Click me',
  },
};

export const Disabled: Story = {
  args: {
    theme: ButtonType.PRIMARY,
    text: 'Disable',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    theme: ButtonType.SECONDARY,
    text: 'SECONDARY',
  },
};

export const Error: Story = {
  args: {
    theme: ButtonType.ERROR,
    text: 'ERROR',
  },
};

export const IconButton: Story = {
   args: {
    theme: ButtonType.SUCCESS,
    text: 'ADD',
    // icon: () => {<Add />},
  },
};
