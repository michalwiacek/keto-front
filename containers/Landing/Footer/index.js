import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Box from '../../../components/elements/Box';
import Text from '../../../components/elements/Text';
import Heading from '../../../components/elements/Heading';
import Button from '../../../components/elements/Button';
import Input from '../../../components/elements/Input';
import Container from '../../../components/Container';
import SocialProfile from '../FooterSocialProfile/';
import {
  FooterWrapper,
  Newsletter,
  FooterNav,
} from './footer.style';
import { SOCIAL_PROFILES } from '../../../common/src/data';


const Footer = ({
  row,
  col,
  pad,
  titleStyle,
  newsletterButton,
  copyrightStyle,
  contactItem,
  flexBox,
  contactInfo,
  noMargin,
}) => {
  return (
    <FooterWrapper>
      <Box {...row} {...flexBox} >
        <Box {...col} {...pad}>
          <Heading as="h3" content="Zapisz się do naszego newsettlera " {...titleStyle} />
          <Text content="Otrzymuj informację o nowych interesujących treściach jako pierwszy"/>
          <Newsletter>
            <Input
              inputType="email"
              placeholder="Adres Email"
              iconPosition="right"
              isMaterial={false}
              className="email_input"
              aria-label="email"
            />
            <Button {...newsletterButton} title="Zapisz się" />
          </Newsletter>
        </Box>
        <Box {...contactItem} {...pad}>
          <Text content="+ 44 345 678 903" {...contactInfo} />
          <Text content="ADOBBEXD@MAIL.COM" {...contactInfo} />
          <Text content="FIND A STORE" {...contactInfo} />
        </Box>
        <Box {...contactItem} {...pad}>
          <Text content="Kontakt" {...contactInfo} />
          <Text content="Polityka Prywatności" {...contactInfo} />
          <Text content="FAQ" {...contactInfo} />
        </Box>
        <Box {...contactItem} {...pad}>
          <Text content="About adobe XD kit" {...contactInfo} />
          <Text content="work with us" {...contactInfo} />
          <Text content="privacy policy" {...contactInfo} />
          <Text content="Terms and conditions" {...contactInfo} />
          <Text content="PRESS ENQUIRIES" {...contactInfo} />
        </Box>
      </Box>
    <FooterNav>
      <Box {...row} >
        <Box {...col}>
            <Text
              as="span"
              content="©DietMaister.com"
              {...copyrightStyle}
            />
        </Box >
            <SocialProfile
              className="footer_social"
              items={SOCIAL_PROFILES}
              iconSize={30}
              {...copyrightStyle}
            /> 
        </Box>
      </FooterNav>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  titleStyle: PropTypes.object,
  linkStyle: PropTypes.object,
  newsletterButton: PropTypes.object,
  copyrightStyle: PropTypes.object,
  contactItem: PropTypes.object,
  flexBox: PropTypes.object,
  contactTitle: PropTypes.object,
  contactInfo: PropTypes.object,
  noMargin: PropTypes.object,
};

Footer.defaultProps = {
  pad: {
    p: '10px',
    mb: '10px',
    mr: '20px',
    ml: '20px',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    ml: '25px',
    mr: '25px',
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3, 1 / 3],
    pl: '15px',
    pr: '15px',
    mb: ['40px', '0', '0', '0', '0', '0'],
  },
  titleStyle: {
    fontSize: ['20px', '24px'],
    fontWeight: '600',
    mb: ['10px', '15px'],
  },
  linkStyle: {
    fontSize: ['22px', '26px', '26px', '30px'],
    color: '#3444f1',
    mb: 0,
  },
  newsletterButton: {
    type: 'button',
    fontSize: '20px',
    pl: '20px',
    pr: '20px',
    colors: 'primary',
    minHeight: 'auto',
  },
  copyrightStyle: {
    fontSize: '20px',
    color: '#fff',
    p: '20px',
  },
  flexBox: {
    flexBox: true,
    justifyContent: 'space-between',

  },
  contactItem: {
   m: '-20px',
   mt: '10px',
   pl: '20px',
  },
  contactTitle: {
    fontSize: ['15x', '15px', '16px', '16px', '16px'],
    pl: '20px',
    mb: '10px',
  },
  contactInfo: {
    fontSize: ['16x', '16px', '18px', '18px', '20px'],
    fontWeight: '500',
    pl: '10px',
    pt: '2px',
    m: '0px',
  },
  noMargin: {
    m: '0',
  },
};

export default Footer;
