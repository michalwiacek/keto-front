import React, {Fragment} from 'react'
import withLayout from 'components/MainLayout';
import BannerSection from "containers/Landing/Banner";
import FeatureSection from "containers/Landing/Feature";
import RideOption from "containers/Landing/RideOption";
//import TestimonialSection from "../containers/Landing/TestimonialSection";
const Page = () => {
  return (
    <Fragment>
      <BannerSection />
      <RideOption />

      <FeatureSection />
    </Fragment>
  )
};

export default withLayout(Page);