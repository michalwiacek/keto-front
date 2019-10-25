import React, {Fragment} from 'react'

import withLayout from 'components/MainLayout';
import BannerSection from "containers/Landing/Banner";
import FeatureSection from "containers/Landing/Feature";
import RideOption from "containers/Landing/RideOption";

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