import type { Meta, StoryObj } from '@storybook/react'; 
import { Avatar } from './Avatar'; 
import { StatusSticker , BorderWrapper } from './decorators';
 
const meta: Meta<typeof Avatar> = { 
  title: 'Example/Avatar', 
  component: Avatar, 
  argTypes: { 
    size: { 
      control: 'select', 
      options: ['small', 'medium', 'large'], 
    }, 
  }, 
  decorators: [BorderWrapper, StatusSticker],
  tags: ['autodocs'],
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
    active: true,
  }, 
}; 

export const Sizes = {
  render : (args) => {
    return (
      <div>
        <Avatar size='small' name={args.name} />
        <Avatar size='medium' name={args.name} />
        <Avatar size='large' name={args.name} />
      </div>
    )
  },
  args: {
    name: 'Michael Shilman',
  },
}
 