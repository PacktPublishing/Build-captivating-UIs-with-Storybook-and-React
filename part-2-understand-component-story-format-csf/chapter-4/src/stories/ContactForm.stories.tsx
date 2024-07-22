import type { Meta, StoryObj } from '@storybook/react';

import { ContactForm } from './ContactForm';
import { SocialLinks , Copyright } from './components/Footer';
import { within, userEvent, expect } from '@storybook/test';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'forms/ContactForm',
  component: ContactForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
 
 
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blank: Story = {
  args: { },
};


