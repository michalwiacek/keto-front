import React, { Fragment } from 'react';
import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import App from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper';
import withReduxSaga from "next-redux-saga";

import createStore from 'lib/store'

class DietMaisterApp extends App {
  static async getInitialProps ({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }
    return { pageProps }
  }

  render () {
  const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Fragment>
          <Modal />
          <Component {...pageProps} />
        </Fragment>
      </Provider>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(DietMaisterApp))
