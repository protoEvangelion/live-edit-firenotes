// I import & export all my styled component related libraries for easy clean importing

import { Col, Grid, Row as GridRow } from 'react-styled-flexboxgrid'
import * as styledComponents from 'styled-components'
import {
  alignItems,
  alignSelf,
  borderRadius,
  bottom,
  color,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  justifySelf,
  left,
  position,
  right,
  space,
  style,
  top,
  width,
  zIndex,
} from 'styled-system'
import { ifProp, prop, switchProp } from 'styled-tools'

// import { IThemeInterface } from './theme'

const { default: styled, css, createGlobalStyle, keyframes, ThemeProvider } = styledComponents

const Row = styled(GridRow)`
  ${space};
`

// @media screen and (min-width: 64em) 1024px
// @media screen and (min-width: 52em) 832px
// @media screen and (min-width: 40em) 640px

const media = {
  giant: (arr: TemplateStringsArray, ...args: any) => css`
    @media (min-width: 64em) {
      ${css(arr, ...args)};
    }
  `,
  desktop: (arr: TemplateStringsArray, ...args: any) => css`
    @media (min-width: 52em) {
      ${css(arr, ...args)};
    }
  `,
  tablet: (arr: TemplateStringsArray, ...args: any) => css`
    @media (min-width: 40em) {
      ${css(arr, ...args)};
    }
  `,
}

export {
  Grid,
  Col,
  Row,
  /* Styled Components */
  styled,
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider,
  /* Styled System */
  alignItems,
  alignSelf,
  borderRadius,
  bottom,
  color,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  left,
  position,
  right,
  space,
  style,
  top,
  width,
  zIndex,
  justifySelf,
  /* Styled Tools */
  ifProp,
  prop,
  switchProp,
  /* custom */
  media,
}
