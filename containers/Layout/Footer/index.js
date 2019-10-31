import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from '../../../components/elements/Box';
import Text from '../../../components/elements/Text';
import Heading from '../../../components/elements/Heading';
import Select from '../../../components/elements/Select';
import Container from '../../../components/Container';
import SocialProfile from '../SocialProfile';
import FooterWrapper, { List, ListItem } from './footer.style';
import { menuWidget, LANGUAGE_NAMES, SOCIAL_PROFILES } from '../../../common/src/data';

const Footer = ({ row, col, colOne, colTwo, titleStyle }) => {
    return (
        <FooterWrapper id="footerSection">
            <Container noGutter mobileGutter width="1200px">
                <Box className="row" {...row}>
                    <Box {...colOne}>
                        <Heading content="Language" {...titleStyle} />
                        <Select
                            options={LANGUAGE_NAMES}
                            placeholder="English"
                            className="Language_search_select"
                            aria-label="language switcher"
                        />
                    </Box>
                    {/* End of footer logo column */}
                    <Box {...colTwo}>
                        {menuWidget.map(widget => (
                            <Box className="col" {...col} key={widget.id}>
                                <Heading content={widget.title} {...titleStyle} />
                                <List>
                                    {widget.menuItems.map(item => (
                                        <ListItem key={`list__item-${item.id}`}>
                                            <Link href={item.url}>
                                                <a className="ListItem">{item.text}</a>
                                            </Link>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        ))}
                    </Box>
                    {/* End of footer List column */}
                </Box>
                <Box className="row copyRight" {...row}>
                    <Text content="Copyright 2018 @Godrive Corporation." className="copyRightText" />
                    <SocialProfile className="footer_social" items={SOCIAL_PROFILES} iconSize={18} />
                </Box>
            </Container>
        </FooterWrapper>
    );
};

// Footer style props
Footer.propTypes = {
    row: PropTypes.object,
    col: PropTypes.object,
    colOne: PropTypes.object,
    colTwo: PropTypes.object,
    titleStyle: PropTypes.object,
    textStyle: PropTypes.object,
    logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
    // Footer row default style
    row: {
        flexBox: true,
        flexWrap: 'wrap',
        ml: '-4px',
        mr: '-4px',
    },
    // Footer col one style
    colOne: {
        width: ['100%', '30%', '33%', '33%'],
        mb: ['30px', 0],
        pl: ['0px', 0],
        pr: ['0px', '0px', 0],
    },
    // Footer col two style
    colTwo: {
        width: ['100%', '70%', '67%', '67%'],
        flexBox: true,
        flexWrap: 'wrap',
    },
    // Footer col default style
    col: {
        width: ['100%', 1 / 3, 1 / 3, 1 / 3],
        pl: [0, '15px'],
        pr: [0, '15px'],
        mb: ['30px', '30px'],
    },
    // widget title default style
    titleStyle: {
        color: '#FFFFFF',
        fontSize: ['15px', '16px', '16px', '18px', '18px'],
        fontWeight: '600',
        lineHeight: '1.34',
        mb: ['15px', '18px', '18px', '20px', '30px'],
        fontFamily: 'Poppins',
    },
    // Default logo size
    logoStyle: {
        width: '128px',
        mb: '15px',
    },
    // widget text default style
    textStyle: {
        color: '#FFFFFF',
        fontSize: '16px',
        mb: '12px',
        fontWeight: '600',
        fontFamily: 'Lato',
    },
};

export default Footer;
