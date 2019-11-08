// // import original module declarations
// import 'styled-components'

// // and extend them!
// declare module 'styled-components' {
//   export interface DefaultTheme {
//     breakpoints: string[]
//     space: number[]
//     fontSizes: number[]
//     fontWeights: number[]
//     lineHeights: {
//       solid: number
//       title: number
//       copy: number
//     }
//     letterSpacings: {
//       normal: string
//       tracked: string
//       tight: string
//       mega: string
//     }
//     borders: array[] // do sprawdzenia
//     radius: array[]
//     borderRadius: string
    
//     colors: {
//       main: string
//       secondary: string
//     }
//   }
// }

import * as React from 'react';
import { ThemedStyledComponentsModule } from 'styled-components';

declare module 'styled-components' {
  export interface ThemedStyledComponentsModule<T> {
      createGlobalStyle(
          strings: TemplateStringsArray,
          ...interpolations: SimpleInterpolation[]
      ): React.ComponentClass;
  }

  export function createGlobalStyle(
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): React.ComponentClass;
}
