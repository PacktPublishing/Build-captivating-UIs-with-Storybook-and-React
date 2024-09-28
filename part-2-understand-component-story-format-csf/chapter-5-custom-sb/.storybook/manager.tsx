import { addons, types, useGlobals } from "@storybook/manager-api";
//import { themes } from '@storybook/theming';
import yourTheme from "./PacktTheme";
import React from "react";

addons.setConfig({
  navSize: 300,
  bottomPanelHeight: 300,
  rightPanelWidth: 300,
  panelPosition: "bottom",
  enableShortcuts: true,
  showToolbar: true,
  theme: yourTheme, // sthemes.light,
  selectedPanel: undefined,
  initialActive: "sidebar",
  sidebar: {
    showRoots: false,
    collapsedRoots: ["other"],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: true }, // hide zoom
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});

// define constants for the addon
export const FONT_SIZE_ADDON_ID = "font-size-addon";
export const FONT_SIZE_TOOL_ID = `${FONT_SIZE_ADDON_ID}/tool`;
export const FONT_SIZE_PANEL_ID = `${FONT_SIZE_ADDON_ID}/panel`;
export const FONT_SIZE_TAB_ID = `${FONT_SIZE_ADDON_ID}/tab`;

// Define the tool, panel, and tab componentss
export const Tool = ({ api }) => {
  const [{ fontSize }, updateGlobals] = useGlobals();

  const handleFontSizeChange = (newSize) => {
    updateGlobals({ fontSize: newSize });
  };

  return (
    <select
      value={fontSize || "16px"}
      onChange={(e) => handleFontSizeChange(e.target.value)}
    >
      <option value="12px">Small (12px)</option>
      <option value="16px">Medium (16px)</option>
      <option value="20px">Large (20px)</option>
      <option value="24px">Extra Large (24px)</option>
    </select>
  );
};

export const Panel = ({ active }) => {
  const [{ fontSize }, updateGlobals] = useGlobals();

  const handleCustomFontSize = (e) => {
    updateGlobals({ fontSize: e.target.value });
  };

  if (!active) return null;

  return (
    <div style="padding:20px">
      <input
        type="text"
        value={fontSize || "16px"}
        onChange={handleCustomFontSize}
        placeholder="Enter custom font size (e.g., 18px)"
      />
      <p style={{ fontSize }}>
        Preview: The quick brown fox jumps over the lazy dog.
      </p>
    </div>
  );
};

export const Tab = ({ active }) => {
  return <Panel active={active} />;
};

// Register the addon
addons.register(FONT_SIZE_ADDON_ID, (api) => {
  // Register a tool
  addons.add(FONT_SIZE_TOOL_ID, {
    type: types.TOOL,
    title: "Font Size",
    match: ({ viewMode, tabId }) =>
      !!(
        (viewMode && viewMode.match(/^(story)$/)) ||
        tabId === FONT_SIZE_TAB_ID
      ),
    render: () => <Tool api={api} />,
  });

  // Register a panels
  addons.add(FONT_SIZE_PANEL_ID, {
    type: types.PANEL,
    title: "Font Size Control",
    match: ({ viewMode }) => viewMode === "story",
    render: ({ active }) => <Panel active={active} />,
  });

  // Register a tab
  addons.add(FONT_SIZE_TAB_ID, {
    type: types.TAB,
    title: "Font Size",
    render: ({ active }) => <Tab active={active} />,
  });
});
