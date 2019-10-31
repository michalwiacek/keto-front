import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Link from '../Link';
import Image from '../Image';

const Logo = ({ logoWrapperStyle, logoStyle, titleStyle, withAchor, anchorProps, logoSrc, title, ...props }) => (
    <Link {...props} {...logoWrapperStyle}>
        {withAchor ? (
            <a {...anchorProps}>
                {logoSrc ? (
                    <Image src={logoSrc} alt={title} {...logoStyle} />
                ) : (
                    <Text content={title} {...titleStyle} />
                )}
            </a>
        ) : (
            <>
                {logoSrc ? (
                    <Image src={logoSrc} alt={title} {...logoStyle} />
                ) : (
                    <Text content={title} {...titleStyle} />
                )}
            </>
        )}
    </Link>
);

Logo.propTypes = {
    logoSrc: PropTypes.shape,
    title: PropTypes.string.isRequired,
    logoWrapperStyle: PropTypes.shape,
    logoStyle: PropTypes.shape,
    titleStyle: PropTypes.shape,
    withAchor: PropTypes.bool,
    anchorProps: PropTypes.shape,
};

Logo.defaultProps = {
    logoSrc: {},
    logoStyle: {},
    withAchor: false,
    anchorProps: {},
    logoWrapperStyle: {
        display: 'inline-block',
        mr: '1rem',
        'a:hover,a:focus': {
            textDecoration: 'none',
        },
    },
    titleStyle: {
        display: 'inline-block',
        fontSize: '2rem',
        lineHeight: 'inherit',
        whiteSpace: 'nowrap',
    },
};
export default Logo;
