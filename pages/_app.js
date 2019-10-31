/* eslint-disable react/display-name */
import React from 'react';
import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';

// eslint-disable-next-line react/prop-types
export default ({ Component, pageProps }) => {
    return (
        <>
            <Modal />
            <Component {...pageProps} />
        </>
    );
};
