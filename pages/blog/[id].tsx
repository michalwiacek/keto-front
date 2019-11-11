import React from 'react';
import { useRouter, Router } from 'next/router';
import PostSection from "../../containers/Blog/PostSection";
import withApollo from '../../lib/apollo';
import ScrollProgressRead from '../../components/ScrollProgressRead';

const Post = () => {
  const router = useRouter();
  
  return (
    <>
      <ScrollProgressRead backgroundColor="#FFFFFF" barColor="#FFCC00" height="3px" target="article-body" />
      <PostSection />
    </>
  );
};

export default withApollo(Post);
