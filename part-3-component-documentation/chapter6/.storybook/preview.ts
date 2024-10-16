import type { Preview } from "@storybook/react";
import MyDocsTemplate from "../src/stories/MyDocsTemplate.mdx";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      autodocs: 'tags',
      // page: MyDocsTemplate,
    },
  },
  // tags: ["autodocs"],
};

export default preview;
