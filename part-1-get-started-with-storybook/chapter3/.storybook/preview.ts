import type { Preview } from "@storybook/react";
import { PaddingWrapper } from "../src/stories/decorators";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [],
};

export default preview;
