import React from 'react';

export const BorderWrapper = (Story, context) => (
  <div style={{ border: '1px solid #000' }}>
    <Story />
  </div>
);

export const PaddingWrapper = (Story, context) => (
  <div style={{ padding: '40px' }}>
    <Story />
  </div>
)

export const StatusSticker = (Story, context) => {
  const statusStyle = {
    position: 'relative',
  };

  const stickerStyle = {
    position: 'absolute',
    top: '100%',
    left: '0px',
    background: '#ff0',
    padding: '5px 10px',
    borderRadius: '5px',
  };

  const statusMessage = context.args.active
  ? `${context.args.name} is active`
  : `${context.args.name} is inactive`;

return (
  <div style={statusStyle}>
    <Story />
    <div style={stickerStyle}>{statusMessage}</div>
  </div>
);
};
