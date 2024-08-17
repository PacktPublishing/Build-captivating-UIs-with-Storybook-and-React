import { addons } from '@storybook/manager-api';
//import { themes } from '@storybook/theming';
import yourTheme from './PacktTheme';

addons.setConfig({
  navSize: 300,
  bottomPanelHeight: 300,
  rightPanelWidth: 300,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  theme: yourTheme, // sthemes.light,  
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: true }, // hide zoom
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});