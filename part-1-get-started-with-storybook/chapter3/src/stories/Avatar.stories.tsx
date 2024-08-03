import type { Meta, StoryObj } from '@storybook/react'; 
import { Avatar } from './Avatar'; 
 
const meta: Meta<typeof Avatar> = { 
  title: 'Example/Avatar', 
  component: Avatar, 
  argTypes: { 
    size: { 
      control: 'select', 
      options: ['small', 'medium', 'large'], 
    }, 
  }, 
}; 
 
export default meta; 
type Story = StoryObj<typeof Avatar>; 
 
export const Small: Story = { 
  args: { 
    name: 'Michael Shilman', 
    size: 'small', 
  }, 
}; 
 
export const Medium: Story = { 
  args: { 
    name: 'Tom Coleman', 
    size: 'medium', 
  }, 
}; 
 
export const Large: Story = { 
  args: { 
    name: 'Jasper Katz', 
    size: 'large', 
  }, 
}; 
 