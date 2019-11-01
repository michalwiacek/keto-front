import React from 'react';
import { useRouter } from 'next/router';

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

export default Post;
