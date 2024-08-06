import React from 'react';
import './avatar.css';
export interface AvatarProps {
  name: string;
  size: 'small' | 'medium' | 'large';
  active: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({ name, size, active }) => {
  const sizeClass = `avatar--${size}`;
  const borderClass = active ? 'avatar--active' : 'avatar--inactive';

  return (
    <div className={`avatar ${sizeClass} ${borderClass}`}>
      <span>{name[0].toUpperCase()}</span>
    </div>
  );
};

