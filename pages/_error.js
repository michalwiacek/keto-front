import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import ErrorSec from '../containers/Error';
import { ResetCSS } from '../common/src/assets/css/style';

class Error extends React.Component {
    static async getInitialProps({ res, err }) {
        // eslint-disable-next-line no-nested-ternary
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        const { statusCode } = this.props;
        return (
            <>
                <Head>
                    <title>404: Not found</title>
                    {/* Load google fonts */}
                    <link
                        href="https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,500,600,700|Roboto:400,500,700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <ResetCSS />
                <div>{statusCode ? `An error ${statusCode} occurred on server` : <ErrorSec />}</div>
            </>
        );
    }
}

Error.propTypes = {
    statusCode: PropTypes.number.isRequired,
};

export default Error;
