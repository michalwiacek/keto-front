import React, {Fragment} from 'react'
import BannerSection from "../containers/Landing/Banner";
import FeatureSection from "../containers/Landing/Feature";
import RideOption from "../containers/Landing/ReadCookSection";
import LocationSection from "../containers/Landing/LocationSelection";
import withApollo from "../lib/apollo";
//import TestimonialSection from "../containers/Landing/TestimonialSection";
const IndexPage = () => {
  return (
    <Fragment>
      <BannerSection />
      <RideOption />
      <LocationSection />
      <FeatureSection />
    </Fragment>
  )
};

export default withApollo(IndexPage);