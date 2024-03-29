import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from '../../../components/elements/Box';
import Text from '../../../components/elements/Text';
import Button from '../../../components/elements/Button';
import Card from '../../../components/elements/Card';
import Image from '../../../components/elements/Image';
import FeatureBlock from '../../../components/FeatureBlock';
import Container from '../../../components/Container';
import { LocationSelectorWrap } from './locationSelection.style';
import ImageOne from '../../../common/src/assets/images/my_way.png';

const LocationSection = ({
  sectionWrapper,
  row,
  col,
  description,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageOne,
  imageWrapperOne,
  sectionSubTitle,
  estimateBtnStyle,
}) => {
  return (
    <LocationSelectorWrap id="fare_section">
      <Box {...sectionWrapper} id="control">
        <Container fullWidth noGutter className="control-sec-container">
          <Box {...row} {...imageAreaRow}>
            <Box {...col} {...imageArea}>
              <Card {...imageWrapper} {...imageWrapperOne}>
                <Fade left>
                  <Image src={ImageOne} alt="Info Image One" {...imageOne} />
                </Fade>
              </Card>
            </Box>

            <Box {...col} {...textArea} className="textArea">
              <Text content="Jaki masz cel?" {...sectionSubTitle} />
              <FeatureBlock
                description={
                  <Text
                    content="Czy jest nim utrata wagi i poprawa samopoczucia? A może potrzebujesz podnieść swoją efektywność i zadbać o zdrowie?
                    Dowiedz się więcej o diecie ketogenicznej z&nbsp;naszych artykułów."
                    {...description}
                  />
                }
              />
              <Button
                className="derviceSelector"
                title="Sprawdź"
                variant="textButton"
                icon={<i className="flaticon-next" />}
                {...estimateBtnStyle}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </LocationSelectorWrap>
  );
};

LocationSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  description: PropTypes.object,
  estimateBtnStyle: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageAreaRow: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageOne: PropTypes.object,
  imageWrapperOne: PropTypes.object,
  sectionSubTitle: PropTypes.object,
};

LocationSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['0px', '0px'],
    pb: ['0px', '0px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '60%', '52%', '45%', '45%'],
    pl: ['0px', '15px', '30px', '60px', '60px'],
    m: ['0px 30px', 0],
  },
  imageArea: {
    width: ['0px', '40%', '48%', '55%', '55%'],
    flexBox: true,
  },
  imageAreaRow: {},

  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    pointerEvents: 'none',
    width: '100%',
  },
  imageOne: {
    width: '100%',
  },
  sectionSubTitle: {
    as: 'span',
    fontSize: ['22px', '26px', '26px', '30px', '36px'],
    fontWeight: '600',
    color: '#15172C',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  description: {
    lineHeight: ['28px', '32px', '32px', '32px', '32px'],
    mt: ['20px', '30px', '30px', '30px', '30px'],
    mb: ['30px', '30px', '30px', '35px', '35px'],
    maxWidth: ['100%', '100%', '100%', '320px', '320px'],
    textAlign: ['left', 'left'],
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#15172C',
    fontFamily: 'Lato',
  },
  estimateBtnStyle: {
    type: 'button',
    minWidth: '160px',
    minHeight: '47px',
    fontSize: '16px',
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '14px',
    colors: 'primaryWithBg',
  },
};

export default LocationSection;
