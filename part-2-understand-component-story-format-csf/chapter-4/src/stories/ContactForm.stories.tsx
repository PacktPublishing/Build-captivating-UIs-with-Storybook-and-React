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

export const PreFilled = {
  args: {
    subject: 'Support Request',
    email: 'user@example.com',
    message: 'I have a question about...',
  },
};


export const PreFilledMobile = {
  ...PreFilled,
  parameters: {
    viewports: { default: 'mobile' },
  },
};

// Explicitly showing the optional render function (commented out)
export const PreFilledSubjectOnly = {
  // render: (args) => <ContactForm {...args} />, // Optional default render function
  args: {
    subject: 'Support Request', // Updated argument name
  },
};

export const InFooter = {
  render: ({ args }) => (
    <footer style={{backgroundColor: 'gray',padding:'20px  '}}>
      <ContactForm {...args} />
      <Copyright />
      <SocialLinks />
    </footer>
  ),
};


