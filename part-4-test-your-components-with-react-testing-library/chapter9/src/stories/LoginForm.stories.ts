import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within, expect } from '@storybook/test';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {};

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('email'), 'email@packthub.com');
    await userEvent.type(canvas.getByTestId('password'), 'mypassbook');
    await userEvent.click(canvas.getByRole('button'));

    await expect(
      canvas.getByText(
        'Welcome to Packthub! Your adventure starts now.',
      ),
    ).toBeInTheDocument();
  },
};
