import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from '../../../components/elements/Box';
import Text from '../../../components/elements/Text';
import Heading from '../../../components/elements/Heading';
import FeatureBlock from '../../../components/FeatureBlock';
import { Features } from '../../../common/src/data';
import Container from '../../../components/Container';
import FeatureSectionWrapper from './feature.style';

const FeatureSection = ({
  row,
  col,
  secTitleWrapper,
  secTitle,
  secDescription,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  return (
    <FeatureSectionWrapper id="feature_section">
      <Container noGutter mobileGutter width="1200px" className="container">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Lekarstwo na wszystko?" />
          <Heading {...secTitle} content="Nie daj sobie tego wmówić!" />
          <Text
            {...secDescription}
            content="Dieta ketogeniczna słynie jako niezwykłe narzędzie do redukcji tkanki tłuszczowej.             Sprawdź też inne jej zastosowanie."
          />
        </Box>
        <Box className="row" {...row}>
          {Features.map((feature, index) => (
            <Box className="col" {...col} key={feature.id}>
              <Fade up>
                <FeatureBlock
                  icon={<img src={feature.img} alt={feature.title} />}
                  wrapperStyle={blockWrapperStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={<Heading content={feature.title} {...featureTitle} />}
                  description={<Text content={feature.content} {...featureDescription} />}
                  className="saasFeature"
                />
              </Fade>
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
  iconStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  blockWrapperStyle: PropTypes.object,
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  secTitleWrapper: {
    mb: ['65px', '65px', '80px', '90px', '90px'],
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '36px'],
    fontWeight: '600',
    color: '#15172C',
    lineHeight: '1.34',
    mb: ['0px', '0px', '0px', '0px', '0px'],
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#15172C',
    lineHeight: '1.5',
    mt: '30px',
    textAlign: 'center',
    width: '300px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
    fontFamily: 'Lato',
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 4, 1 / 4],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px'],
  },
  // feature icon default style
  iconStyle: {},
  // feature content default style
  contentStyle: {
    textAlign: 'center',
    mt: ['30px', '30px'],
  },
  // feature title default style
  featureTitle: {
    fontSize: ['15px', '16px'],
    lineHeight: '1.5',
    fontWeight: '600',
    color: '#15172C',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  // feature description default style
  featureDescription: {
    lineHeight: ['28px', '32px', '32px', '32px', '32px'],
    mt: ['15px', '15px', '15px', '15px', '15px'],
    maxWidth: ['100%', '100%', '100%', '270px', '270px'],
    textAlign: ['center', 'center'],
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#15172C',
    fontFamily: 'Lato',
  },
};

export default FeatureSection;
