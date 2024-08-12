import type { Meta, StoryObj } from '@storybook/react';

import { ContactForm } from './ContactForm';
import { SocialLinks , Copyright } from '../components/Footer';
import { within, userEvent, expect } from '@storybook/test';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {

  component: ContactForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
 
 
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>

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
    <footer style={{backgroundColor: '#F2F2F2',padding:'20px', width:'700px$'}}>
      <ContactForm {...args} />
      <Copyright /> 
      <SocialLinks />
    </footer>
  ),
};

export const AutoFilledAndSubmitForm = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
   
    const subjectInput = canvas.getByLabelText('Subject:', { selector: 'input' }); 
    await userEvent.type(subjectInput, 'Test Subject', { delay: 100 });
   
    const emailInput = canvas.getByLabelText('Email:', { selector: 'input' });
    await userEvent.type(emailInput, 'example-email@email.com', { delay: 100 });
   
    const messageInput = canvas.getByLabelText('Message:', { selector: 'textarea' }); 
    await userEvent.type(messageInput, 'This is a test message.', { delay: 100 }); 
   
    const submitButton = canvas.getByRole('button');
    await userEvent.click(submitButton);
    const successMessage = canvas.queryByText(/Success/i); // Case-insensitive search for "Success"
    expect(successMessage).toBeInTheDocument(); // Assert success message is present
  },
};
