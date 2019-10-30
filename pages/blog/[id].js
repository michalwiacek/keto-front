import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import withLayout from '../../components/MainLayout';

const Content = () => {
    const router = useRouter();

    return (
        <>
            <h1>{router.query.title}</h1>
            <p>This is the blog post content.</p>
        </>
    );
};

const Post = () => {
    return (
        <>
            <Content />
        </>
    );
};

export default withLayout(Post);
