import React, {Fragment} from 'react'
import BlogSection from '../containers/Blog/BlogSection';
import withLayout from '../components/MainLayout';
import Link from "next/link";

const Blog = () => {
  return (
    <Fragment>
      <BlogSection/>
    </Fragment>
  )
};

export default withLayout(Blog);