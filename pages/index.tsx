import React, { Fragment } from 'react';
import LatestNewsSection from '../containers/Landing/LatestNewsSection';
import BannerSection from '../containers/Landing/Banner';
import FeatureSection from '../containers/Landing/Feature';
import RideOption from '../containers/Landing/ReadCookSection';
import LocationSection from '../containers/Landing/LocationSelection';
import withApollo from '../lib/apollo';

const IndexPage = () => {
  return (
    <Fragment>
      <BannerSection />
      <RideOption />
      <LocationSection />
      <LatestNewsSection />
      <FeatureSection />
    </Fragment>
  )
};

export default withApollo(IndexPage);