import React, {Fragment} from 'react'
import BannerSection from "../containers/Landing/Banner";
import FeatureSection from "../containers/Landing/Feature";
import RideOption from "../containers/Landing/RideOption";
import LocationSection from "../containers/Landing/LocationSelection";
import withReduxSaga from '../lib/withReduxSaga';
import withApollo from "../lib/withApollo";
import { connect } from 'react-redux';
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

export default connect()(IndexPage);