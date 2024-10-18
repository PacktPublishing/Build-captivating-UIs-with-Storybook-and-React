import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'My PacktHub Storybook',
  brandUrl: 'https://www.packtpub.com/', 
  brandImage: 'https://www.packtpub.com/rebuild/build/assets/logo-new-Dz-8EKdV.svg',
  brandTarget: '_self',

  // extra customizations
  colorPrimary: '#f97141',
  colorSecondary: '#585C6D',

  // UI
  appBg: '#f2f2f2',
  appContentBg: '#f2f2f2',
  appPreviewBg: '#f2f2f2',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,

});