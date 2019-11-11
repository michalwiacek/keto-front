import React from 'react';
import BlogSection from '../containers/Blog/BlogSection';
import withApollo from '../lib/apollo';

class BlogIndex extends React.Component {
    render () {
        return (
            <>
                <BlogSection />
            </>
        );
    }
};

export default withApollo(BlogIndex);
