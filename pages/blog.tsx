import React from 'react';
import BlogSection from '../containers/Blog/BlogSection';
import withApollo from '../lib/withApollo';

const Blog = () => {
    return (
        <>
            <BlogSection />
        </>
    );
};

export default withApollo(Blog);
