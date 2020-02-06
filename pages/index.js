import React from 'react';
import LatestNewsSection from '../containers/Landing/LatestNewsSection';
import BannerSection from '../containers/Landing/Banner';
import LowerMenu from '../containers/Landing/LowerMenu';
import FeatureSection from '../containers/Landing/Feature';
import RideOption from '../containers/Landing/ReadCookSection';
import LocationSection from '../containers/Landing/LocationSelection';
import withApollo from '../lib/apollo';

const styles = {
  body: {
    height: '100%',
    overflow: 'hidden',
  },
};

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    for (let i in styles.body) {
      document.body.style[i] = styles.body[i];
    }
  }

  componentWillUnmount = () => {
    for (let i in styles.body) {
      document.body.style[i] = null;
    }
  };

  render() {
    return (
      <>
        <LowerMenu />
        <BannerSection />
        <RideOption />
        <LocationSection />
        <LatestNewsSection />
        <FeatureSection />
      </>
    );
  }
}

export default withApollo(IndexPage);
