import { describe, test, expect } from 'vitest'
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/react'
import * as stories from './LoginForm.stories';

const { EmptyForm, FilledForm } = composeStories(stories);

describe('LoginForm', () => {
  test('should render empty form', async () => {
    const { getByLabelText, getByRole } = render(<EmptyForm />);
    await waitFor(() => expect(getByLabelText('Email:')).toBeInTheDocument());
    expect(getByLabelText('Password:')).toBeInTheDocument();
    expect(getByRole('button')).toHaveTextContent('Login');
  });

  test('should submit filled form', async () => {
    const { getByLabelText, findByText } = render(<FilledForm />);
    
    expect(getByLabelText('Email:')).toHaveValue('email@packthub.com');
    expect(getByLabelText('Password:')).toHaveValue('mypassbook');
    expect(await findByText('Welcome to Packthub! Your adventure starts now.')).toBeInTheDocument();
  });
});
