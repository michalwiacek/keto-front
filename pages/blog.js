import React, {Fragment} from 'react'
import { connect } from 'react-redux';
import BlogSection from 'containers/Blog/BlogSection';
import withLayout from 'components/MainLayout';

const Blog = () => {
  return (
    <Fragment>
      <BlogSection/>
    </Fragment>
  )
};

export default connect()(withLayout(Blog));