import 'styled-components/native';

import theme from '../styles/theme';

type ThemeType = typeof theme;
declare module 'styled-components/native' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
