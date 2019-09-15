import React, {Fragment} from 'react'
import Head from 'next/head'
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../common/src/theme/light';
import { ResetCSS } from '../common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Landing/light.style'

import Navbar from "../containers/Landing/Navbar";
import BannerSection from '../containers/Landing/Banner';
import TeamSection from "../containers/Landing/TeamSection";
import Footer from "../containers/Landing/Footer";
import { DrawerProvider } from '../common/src/contexts/DrawerContext';

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
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <TeamSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  )
}