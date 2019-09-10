import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import Link from 'next/link';
import Box from '../../../components/elements/Box';
import Button from "../../../components/elements/Button";
import Text from '../../../components/elements/Text';
import Heading from '../../../components/elements/Heading';
import Image from '../../../components/elements/Image';
import Container from "../../../components/Container";

import { cornerDownRight } from 'react-icons-kit/feather/cornerDownRight'
import PersonImage from '../../../common/src/assets/images/keto-hero-04.png';

import BannerWrapper from "./banner.style";

const BannerSection = ({
                         row,
                         contentArea,
                         imageArea,
                         greetingStyle,
                         nameStyle,
                         designationStyle,
                         aboutStyle,
                         roleStyle,
                         roleWrapper,
                         button,
                       }) => {
  return (
    <BannerWrapper id="banner_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Heading content="Odkryj w sobie moc" {...nameStyle} />
            <Heading content="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters," {...designationStyle} />
            <Link href="#">
              <a className="navbar_drawer_button">
                <Button {...button} title="NORMAL" />
              </a>
            </Link>
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
    alignItems: 'stretch',
  },
  contentArea: {
    width: ['100%', '100%', '50%', '40%'],
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imageArea: {
    width: ['100%', '100%', '50%', '60%'],
    flexBox: true,
    alignItems: 'flex-end',
  },
  greetingStyle: {
    as: 'h3',
    color: '#222222',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '500',
    mb: '8px',
  },
  nameStyle: {
    as: 'h2',
    color: '#222222',
    fontSize: ['38px', '38px', '44px', '60px', '80px'],
    fontWeight: '800',
    mb: '6px',
  },
  designationStyle: {
    as: 'h3',
    color: '#222222',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '700',
    mb: ['30px', '30px', '25px', '30px', '30px'],
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
    pl: '0',
    pr: '0',
    colors: 'secondaryWithBg',
    minHeight: 'auto',
  },
};

export default BannerSection;
