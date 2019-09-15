import React, {Fragment} from 'react'
import withLayout from '../../components/MainLayout';
import {useRouter} from "next/router";

const Content = () => {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </>
  )
};

const Post = () => {
  return (
  <Fragment>
    <Content />
  </Fragment>
  )
};

export default withLayout(Post);