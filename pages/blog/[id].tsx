import React from 'react';
import { useRouter, Router } from 'next/router';
import withApollo from '../../lib/withApollo';
import PostSection from '../../containers/Blog/PostSection'

const Post = () => {
  const router = useRouter();
  
  return (
    <>
      <PostSection />
    </>
  );
};

export default withApollo(Post);
