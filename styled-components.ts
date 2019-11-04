import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { DefaultTheme } from 'styled-components'
import { StyleClosetTheme } from './common/src/theme/light';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<DefaultTheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;