import { extendTheme } from 'native-base';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#2182BD',
      secondary: '#5282BD',
      muted: '#C6DAF7'
    },
    ui: {
      primary: '#262626',
      secondary: '#757575',
      tertiary: '#F1F1F1',
      quaternary: '#FFFFFF',
      disabled: '#DEDEDE',
      error: '#D0421B',
      success: '#138000'
    },
    bg: {
      primary: '#FFFFFF',
      secondary: '#F1F1F1'
    },
    text: {
      primary: '#262626',
      secondary: '#757575',
      disabled: '#9C9C9C',
      inverse: '#FFFFFF',
      error: '#D0421B',
      success: '#138000'
    }
  },
  fonts: {
    body: 'Oswald_400Regular',
    heading: 'Lato_400Regular',
    monospace: 'Oswald_400Regular'
  },
  fontSizes: {
    xxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    caption: '12px',
    button: '14px',
    body: '16px',
    title: '20px',
    h5: '24px',
    h4: '34px',
    h3: '45px',
    h2: '56px',
    h1: '112px'
  },
  lineHeights: {
    title: '28px',
    copy: '20px'
  }
});

export default theme;
