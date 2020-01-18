import React, {Fragment} from 'react'
import BannerSection from "../containers/Landing/Banner";
import FeatureSection from "../containers/Landing/Feature";
import RideOption from "../containers/Landing/ReadCookSection";
import FeedSection from "../containers/Landing/FeedSection";
import LocationSection from "../containers/Landing/LocationSelection";
import withApollo from "../lib/apollo";

const IndexPage = () => {
  return (
    <Fragment>
      <BannerSection />
      <RideOption />
      <LocationSection />
      <FeedSection />
      <FeatureSection />
    </Fragment>
  )
};

export default withApollo(IndexPage);