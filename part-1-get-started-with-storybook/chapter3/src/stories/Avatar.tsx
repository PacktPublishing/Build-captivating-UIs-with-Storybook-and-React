import React from 'react';
import './avatar.css';
interface AvatarProps {
  name: string;
  size: 'small' | 'medium' | 'large';
}

export const Avatar: React.FC<AvatarProps> = ({ name, size }) => {
  const sizeClass = `avatar--${size}`;
  return (
    <div className={`avatar ${sizeClass}`}>
      <span>{name[0].toUpperCase()}</span>
    </div>
  );
};


