import React, { Fragment } from 'react';
import BlogSection from 'containers/Blog/BlogSection';
import withLayout from 'components/MainLayout';

const Blog = () => {
    return (
        <>
            <BlogSection />
        </>
    );
};

export default withLayout(Blog);
