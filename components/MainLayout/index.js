import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../common/src/theme/light';
import { ResetCSS } from '../../common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../../containers/Layout/light.style';

import Navbar from '../../containers/Layout/Navbar';
import Footer from '../../containers/Layout/Footer';
import { DrawerProvider } from '../../common/src/contexts/DrawerContext';

const withLayout = Page => {
    return () => (
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
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar />
                        </DrawerProvider>
                    </Sticky>
                    <Page />
                    <Footer />
                </ContentWrapper>
            </>
        </ThemeProvider>
    );
};

export default withLayout;
