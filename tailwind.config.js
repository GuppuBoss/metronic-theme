/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';
import basePlugin from './src/plugins/plugin';
import themePlugin from './src/plugins/components/theme';
import breakpointsPlugin from './src/plugins/components/breakpoints';
import typographyPlugin from './src/plugins/components/typography';
import menuPlugin from './src/plugins/components/menu';
import dropdownPlugin from './src/plugins/components/dropdown';
import accordionPlugin from './src/plugins/components/accordion';
import inputPlugin from './src/plugins/components/input';
import inputGroupPlugin from './src/plugins/components/input-group';
import selectPlugin from './src/plugins/components/select';
import textareaPlugin from './src/plugins/components/textarea';
import fileInputPlugin from './src/plugins/components/file-input';
import switchPlugin from './src/plugins/components/switch';
import checkboxPlugin from './src/plugins/components/checkbox';
import radioPlugin from './src/plugins/components/radio';
import rangePlugin from './src/plugins/components/range';
import containerPlugin from './src/plugins/components/container';
import imageInputPlugin from './src/plugins/components/image-input';
import modalPlugin from './src/plugins/components/modal';
import drawerPlugin from './src/plugins/components/drawer';
import tooltipPlugin from './src/plugins/components/tooltip';
import popoverPlugin from './src/plugins/components/popover';
import btnPlugin from './src/plugins/components/btn';
import btnGroupPlugin from './src/plugins/components/btn-group';
import tabsPlugin from './src/plugins/components/tabs';
import paginationPlugin from './src/plugins/components/pagination';
import cardPlugin from './src/plugins/components/card';
import tablePlugin from './src/plugins/components/table';
import badgePlugin from './src/plugins/components/badge';
import ratingPlugin from './src/plugins/components/rating';
import scrollablePlugin from './src/plugins/components/scrollable';
import progressPlugin from './src/plugins/components/progress';
import apexchartsPlugin from './src/plugins/components/apexcharts';
import leafletPlugin from './src/plugins/components/leaflet';

export default {
  content: ['index.html', './src/**/*.{ts,tsx}'],
  safelist: [
    'demo1',
    'hidden',
    'ki-filled',
    'ki-outline',
    'ki-duotone',
    'ki-solid',
    { pattern: /^apexcharts-.*$/ },
    { pattern: /^leaflet-.*$/ }
  ],
  darkMode: 'class',
  theme: {
    // ... rest of your theme configuration stays the same
  },
  plugins: [
    tailwindcssAnimate,
    basePlugin,
    themePlugin,
    breakpointsPlugin,
    typographyPlugin,
    menuPlugin,
    dropdownPlugin,
    accordionPlugin,
    inputPlugin,
    inputGroupPlugin,
    selectPlugin,
    textareaPlugin,
    fileInputPlugin,
    switchPlugin,
    checkboxPlugin,
    radioPlugin,
    rangePlugin,
    containerPlugin,
    imageInputPlugin,
    modalPlugin,
    drawerPlugin,
    tooltipPlugin,
    popoverPlugin,
    btnPlugin,
    btnGroupPlugin,
    tabsPlugin,
    paginationPlugin,
    cardPlugin,
    tablePlugin,
    badgePlugin,
    ratingPlugin,
    scrollablePlugin,
    progressPlugin,
    apexchartsPlugin,
    leafletPlugin
  ]
};
