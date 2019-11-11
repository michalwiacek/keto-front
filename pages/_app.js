/* eslint-disable react/display-name */
import App from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';
import React from 'react';
import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import * as Sentry from '@sentry/browser';
import { ThemeProvider } from '../styled-components.ts';
import lightTheme from '../common/src/theme/light/index.ts';
import { ResetCSS } from '../common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Layout/light.style';
import Navbar from '../containers/Layout/Navbar';
import Footer from '../containers/Layout/Footer';
import { DrawerProvider } from '../common/src/contexts/DrawerContext';
import createStore from '../lib/store';

// eslint-disable-next-line react/prop-types
class DietMaister extends App {
  render() {
    Sentry.init({ dsn: 'https://99b8217f9dc24cbe9ed1e1901cd690dd@sentry.io/1816201' });
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default withRedux(createStore)(withGA('UA-151925445-2', Router)(withReduxSaga(DietMaister)));
