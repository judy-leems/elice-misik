import 'styled-components';
import { ColorsTypes, FontSizeTypes, TestTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fontSize: FontSizeTypes;
    font: FontTypes;
  }
}
