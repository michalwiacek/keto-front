import React, { Fragment } from 'react';
import LatestNewsSection from '../containers/Landing/LatestNewsSection';
import BannerSection from '../containers/Landing/Banner';
import FeatureSection from '../containers/Landing/Feature';
import RideOption from '../containers/Landing/ReadCookSection';
import LocationSection from '../containers/Landing/LocationSelection';
import withApollo from '../lib/apollo';

const IndexPage = () => {
  return (
    <>
      <BannerSection />
      {/* <RideOption />
      <LocationSection />
      <LatestNewsSection />
      <FeatureSection /> */}
    </>
  );
};

export default withApollo(IndexPage);
