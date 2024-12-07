
import type { Meta, StoryObj } from '@storybook/react';
import { ToggleSwitch } from './ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Example/ToggleSwitch',
  component: ToggleSwitch,
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: {
    isOn: false,
    label: 'Enable Notifications',
  },
};

export const On: Story = {
  args: {
    isOn: true,
    label: 'Enable Notifications',
  },
};

export const Off: Story = {
  args: {
    isOn: false,
    label: 'Enable Notifications',
  },
};