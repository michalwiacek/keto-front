import React, {Fragment} from 'react'
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { ResetCSS } from '../common/src/assets/css/style';
import { DrawerProvider } from '../common/src/contexts/DrawerContext';
import { lightTheme } from '../common/src/theme/light';
import { GlobalStyle, ContentWrapper } from '../containers/Landing/light.style'
import Head from 'next/head'


export default () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Fragment>
        <Head>
          <title>DietMaister</title>
          <meta name="Description" content="DietMaister landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800|Roboto:300,400,400i,500,700,900"
            rel="stylesheet"
          />
        </Head>

        <ResetCSS/>
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
            </DrawerProvider>
          </Sticky>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  )
}