# Setting up Storybook for Next.js

This chapter will guide you through the process of setting up Storybook for Next.js. Storybook is a powerful tool for developing and testing UI components in isolation, and integrating it with Next.js can greatly enhance your development workflow.

## Prerequisites

Before getting started, make sure you have the following prerequisites installed:

- Node.js (version X.X.X or higher)
- Next.js (version X.X.X or higher)

## Installation

To install Storybook for Next.js, follow these steps:

1. Create a new Next.js project or navigate to an existing one.
2. Open your terminal and navigate to the root directory of your Next.js project.
3. Run the following command to install Storybook:

  ```bash
  npx sb init
  ```

4. Follow the on-screen prompts to configure Storybook for your project.

## Configuration

Once Storybook is installed, you can configure it to work with your Next.js project. Here are some common configuration steps:

1. Create a `.storybook` directory in the root of your project.
2. Inside the `.storybook` directory, create a `main.js` file and add the following code:

  ```javascript
  module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-essentials'],
  };
  ```

3. Create a `preview.js` file in the `.storybook` directory and add the following code:

  ```javascript
  import { addDecorator } from '@storybook/react';
  import { withNextRouter } from 'storybook-addon-next-router';

  addDecorator(withNextRouter());

  // Add any other global decorators or configuration here

  // Optional: Add custom parameters to the Storybook toolbar
  export const parameters = {
    // Add your custom parameters here
  };
  ```

4. Customize the configuration files as needed to match your project's requirements.

## Usage

To start Storybook for your Next.js project, run the following command:
