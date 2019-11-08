import React from 'react';
import { useRouter, Router } from 'next/router';
import ProgressBar from "../../components/ScrollProgressBar";
import withApollo from '../../lib/withApollo';
import PostSection from '../../containers/Blog/PostSection'

const Post = () => {
  const router = useRouter();
  
  return (
    <>
      <ProgressBar />
      <PostSection />
    </>
  );
};

export default withApollo(Post);
