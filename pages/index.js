import React, {Fragment} from 'react'
import BannerSection from '../containers/Landing/Banner';
import Newsletter from "../containers/Landing/Newsletter";
import TeamSection from "../containers/Landing/TeamSection";
import Project from "../containers/Landing/Project";
import withLayout from '../components/MainLayout';

const Page = () => {
  return (
    <Fragment>
      <BannerSection />
      <Project />
      <Newsletter />
      <TeamSection />
    </Fragment>
  )
};

export default withLayout(Page);