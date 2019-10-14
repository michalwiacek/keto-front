import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../components/elements/Box';
import Heading from '../../../components/elements/Heading';
import Image from '../../../components/elements/Image';
import Container from "../../../components/Container";

import PersonImage from '../../../common/src/assets/images/keto-hero-04@2x.png';

import BannerWrapper from "./banner.style";

const BannerSection = ({
                         row,
                         contentArea,
                         imageArea,
                         nameStyle,
                         designationStyle,
                       }) => {
  return (
    <BannerWrapper id="banner_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Heading content="Odkryj w sobie moc" {...nameStyle} />
            <Heading content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt" {...designationStyle} />
          </Box>
          <Box {...imageArea} className="image_area">
            <Image src={PersonImage} alt="Runner" />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  imageArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  roleStyle: PropTypes.object,
  roleWrapper: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentArea: {
    width: ['100%', '100%', '45%', '45%'],
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '0'],
    flexBox: true,
    flexWrap: 'wrap',
    ml: '40px',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '15px',
    maxHeight: ['600px', '600px', '360px', '260px'],
  },
  imageArea: {
    width: ['100%', '100%', '45%', '45%'],
    flexBox: true,
    alignItems: 'flex-end',
  },
  nameStyle: {
    as: 'h2',
    color: '#222222',
    fontSize: ['36px', '36px', '38px', '40px', '40px'],
    fontWeight: '800',
    mb: '1.7rem',
    padding: '55px 0 0 26px',
    borderRadius: '15px',
  },
  designationStyle: {
    as: 'h3',
    color: '#222222',
    fontFamily: 'Arial',
    fontSize: ['16px', '18px', '18px', '20px', '20px'],
    fontWeight: '500',
    lineHeight: '1.5',
    mb: ['30px', '30px', '25px', '30px', '50px'],
    ml: ['0', '0', '0', '0'],
    padding: '0 25px 0px 25px',
  },
  roleWrapper: {
    flexBox: true,
    mb: '28px',
  },
  roleStyle: {
    as: 'h4',
    fontSize: ['18px', '18px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: '#222222',
    mb: '0',
    ml: '10px',
  },
  aboutStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#222222',
    lineHeight: '1.5',
    mb: '50px',
  },
  button: {
    type: 'button',
    fontSize: '16px',
    ml: '20px',
    pl: '6px',
    pr: '6px',
    colors: 'secondaryWithBg',
    minHeight: 'auto',
  },
};

export default BannerSection;
