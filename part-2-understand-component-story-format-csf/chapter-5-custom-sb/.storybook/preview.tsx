import type { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  initialGlobals: { fontSize: "16px" },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    fontSize: {
      name: "Font Size",
      description: "Global font size for the preview",
      defaultValue: "16px",
      toolbar: {
        title: "Font Size",
        items: [
          { value: "12px", title: "Small" },
          { value: "16px", title: "Medium" },
          { value: "20px", title: "Large" },
          { value: "24px", title: "Extra Large" },
        ],
      },
    },
  },
};

const withFontSize = (Story, context) => {
  const { globals: { fontSize } } = context;
  return (
    <div style={{ fontSize }}>
      <Story {...context} />
    </div>
  );
};

preview.decorators = [withFontSize];


export default preview;
