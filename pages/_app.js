/* eslint-disable react/display-name */
import App from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';
import React from 'react';
import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from '../styled-components.ts';
import lightTheme from '../common/src/theme/light/index.ts';
import { ResetCSS } from '../common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Layout/light.style';
import Navbar from '../containers/Layout/Navbar';
import Footer from '../containers/Layout/Footer';
import { DrawerProvider } from '../common/src/contexts/DrawerContext';

// eslint-disable-next-line react/prop-types
class DietMaister extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={lightTheme}>
        <>
          <Head>
            <title>DietMaister</title>
            <meta name="Description" content="DietMaister landing page" />
            <meta name="theme-color" content="#ec5555" />
            {/* Load google fonts */}
            <link
              href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Lato:300,400,700"
              rel="stylesheet"
            />
          </Head>

          <ResetCSS />
          <GlobalStyle />

          <ContentWrapper>
            <Sticky top={0} innerZ={9998} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar />
              </DrawerProvider>
            </Sticky>
            <Modal />
            <Component {...pageProps} />
            <Footer />
          </ContentWrapper>
        </>
      </ThemeProvider>
    );
  }
}

export default withGA('UA-151925445-2', Router)(DietMaister);
