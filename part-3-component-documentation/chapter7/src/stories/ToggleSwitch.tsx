import React from 'react';
import './button.css';

interface ToggleSwitchProps {
    isOn: boolean;
    onToggle: () => void;
    label?: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onToggle, label }) => {
    return (
        <div>
            {label && <label className='storybook-button' style={{ marginRight: '10px' }}>{label}</label>}
            <button 
                onClick={onToggle} 
                className={`storybook-button ${isOn ? 'storybook-button--primary' : 'storybook-button--secondary'} storybook-button--medium`}
            >
                {isOn ? 'On' : 'Off'}
            </button>
        </div>
    );
};