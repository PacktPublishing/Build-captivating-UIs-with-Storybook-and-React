import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, waitFor, within, expect, fn } from '@storybook/test';
import { RequestForm } from './RequestForm';


const meta: Meta<typeof RequestForm> = {
 component: RequestForm,
 args: {
   onSubmit: fn(), // Spy on the onSubmit argument
 },
};


export default meta;
type Story = StoryObj<typeof RequestForm>;


export const Empty: Story = {};


export const Submitted: Story = {
 play: async ({ args, canvasElement }) => {
   const canvas = within(canvasElement);


   await userEvent.type(canvas.getByLabelText('Full name'), 'Jane Dough');
   await userEvent.type(canvas.getByLabelText('Email'), 'jane@dough.com');
   await userEvent.type(canvas.getByLabelText('Phone number'), '0612345678');
   await userEvent.type(canvas.getByLabelText('Message'), 'Hello!');


   // Assert that the onSubmit argument was called
   await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
 },
};

export const GroupeSubmitted: Story = {
  play: async ({ args, canvasElement, step }) => {
      const canvas = within(canvasElement);
   
      await step('Fill in user details', async () => {

        await userEvent.type(canvas.getByLabelText('Full name'), 'Jane Dough');
        await userEvent.type(canvas.getByLabelText('Email'), 'jane@dough.com');
        await userEvent.type(canvas.getByLabelText('Phone number'), '0612345678');
        
      });

      await step('Fill in message', async () => {
        await userEvent.type(canvas.getByLabelText('Message'), 'Hello!');
      });
   
      await step('Submit the form', async () => {
      // Assert that the onSubmit argument was called
        await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
    });

  },
}