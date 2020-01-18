import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Box from '../../../components/elements/Box';
import Text from '../../../components/elements/Text';
import Button from '../../../components/elements/Button';
import Heading from '../../../components/elements/Heading';
import FeatureBlock from '../../../components/FeatureBlock';
import { LatestNews } from '../../../common/src/data';
import Container from '../../../components/Container';
import FeatureSectionWrapper from './latest.style';

export const featuredArticles = gql`
  query {
    featuredArticles(limit: 2) {
      id
      title
      publishedAt
      mainImageUrl
      readingTime
      user {
        name
        avatarUrl
      }
      category {
        name
      }
    }
  }
`;

function LatestNewsSection({
  row,
  col,
  secTitleWrapper,
  secTitle,
  secDescription,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  btnStyle,
  data: { loading, error, featuredArticles },
}) {
  if (error) return <p> Error loading posts</p>;
  if (featuredArticles && featuredArticles.length) {
    return (
      <FeatureSectionWrapper id="news_section">
        <Container noGutter mobileGutter className="container">
          <Box {...secTitleWrapper}>
            <Heading {...secTitle} content="Bądź na bieżąco" />
            <Text {...secDescription} content="Wiedza to podstawa!" />
          </Box>
          <Box className="row" {...row}>
            {featuredArticles.map((latest, index) => (
              <Box className="col" {...col} key={latest.id}>
                <FeatureBlock
                  icon={<img src={latest.mainImageUrl} alt={latest.title} />}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={<Heading content={latest.title} {...featureTitle} />}
                  description={<Text content={latest.description} {...featureDescription} />}
                  button={
                    <Link href="/blog/[id]" as={`/blog/${latest.id}`} key={`key-${latest.id}`}>
                      <a>
                        <Button title="Czytaj..." {...btnStyle} />
                      </a>
                    </Link>
                  }
                  className="rideLatest"
                />
              </Box>
            ))}
          </Box>
        </Container>
      </FeatureSectionWrapper>
    );
  }
  return loading ? <div>Loading ...</div> : '';
}

// FeatureSection style props
LatestNewsSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
  btnStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  data: PropTypes.object,
};

// FeatureSection default style
LatestNewsSection.defaultProps = {
  iconStyle: {},
  // section header default style
  secTitleWrapper: {
    mb: ['65px', '65px', '80px', '90px', '90px'],
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '36px'],
    fontWeight: '600',
    color: '#15172C',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#15172C',
    lineHeight: '1.5',
    mb: '0',
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
    width: [1, 1 / 2, 1 / 2, 1 / 2],
  },
  // feature content default style
  contentStyle: {
    textAlign: 'left',
    mt: ['30px', '30px'],
  },
  // feature title default style
  featureTitle: {
    fontSize: ['15px', '16px'],
    lineHeight: '1.5',
    fontWeight: '600',
    color: '#15172C',
    textAlign: 'left',
    fontFamily: 'Poppins',
    mb: '0px',
  },
  // feature description default style
  featureDescription: {
    lineHeight: ['28px', '32px', '32px', '32px', '32px'],
    mt: ['7px', '7px', '7px', '7px', '7px'],
    mb: ['7px', '7px', '7px', '7px', '7px'],
    textAlign: ['left', 'left'],
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#15172C',
    fontFamily: 'Lato',
  },
  btnStyle: {
    lineHeight: ['28px', '32px', '32px', '32px', '32px'],
    fontSize: ['15px', '16px'],
    fontWeight: '700',
    color: '#1A73E8',
    fontFamily: 'Lato',
  },
  data: { LatestNews },
};

export default graphql(featuredArticles)(LatestNewsSection);
