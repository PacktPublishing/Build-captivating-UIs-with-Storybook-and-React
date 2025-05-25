import { describe, test, expect } from 'vitest';
import { composeStories } from '@storybook/react';
import * as stories from './LoginForm.stories';
import { screen, render, waitFor, fireEvent } from '@testing-library/react';

const { EmptyForm, FilledForm } = composeStories(stories);

describe('LoginForm', () => {
  test('should render empty form', async () => {
    render(<EmptyForm />);
    await waitFor(() => expect(screen.getByLabelText('Email:')).toBeInTheDocument());
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Login');
  });

  test('should submit filled form', async () => {
    render(<FilledForm />);
    expect(screen.getByLabelText('Email:')).toHaveValue('email@packthub.com');
    expect(screen.getByLabelText('Password:')).toHaveValue('mypassbook');
    fireEvent.click(screen.getByRole('button'));
    expect(await screen.findByText('Welcome to Packthub! Your adventure starts now.')).toBeInTheDocument();
  });

  test('should show error message on empty submit', async () => {
    render(<EmptyForm />);
    fireEvent.click(screen.getByRole('button'));
    expect(await screen.findByText('Please fill out this field.')).toBeInTheDocument();
  });
});
