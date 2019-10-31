import React from 'react';
import Link from 'next/link';
import Container from 'components/Container';
import Heading from 'components/elements/Heading';
import BlogPost from 'components/BlogPost';

import { posts, featured_post } from 'common/src/data';
import SectionWrapper, {
    SectionHeader,
    TitleArea,
    LinkArea,
    Text,
    FeaturedArea,
    PostsFeedArea,
    PostArea,
} from './blogSection.style';

const BlogSection = () => {
    return (
        <SectionWrapper id="blog">
            <Container width="1260px">
                <FeaturedArea>
                    <div className="featured_post">
                        <div className="thumbnail">
                            <img src={featured_post.thumbUrl} alt={featured_post.title} />
                        </div>
                        <div className="text">
                            <a href={featured_post.categoryUrl}>
                                <h5>{featured_post.category}</h5>
                            </a>
                            <a href="title">
                                <h3 className="title">
                                    <span className="hover-line">{featured_post.title}</span>
                                </h3>
                                <p className="excerpt">{featured_post.excerpt}</p>
                            </a>
                            <h6 className="hover-fade">
                                By&nbsp;<a href={featured_post.authorUrl}>{featured_post.author}</a>
                            </h6>
                        </div>
                    </div>
                </FeaturedArea>
                <PostArea id="recent-stories">
                    <h3>Recent stories</h3>
                    {posts.map(item => (
                        <Link href="/blog/[id]" as={`/blog/${item.id}`}>
                            <BlogPost
                                key={`blog__post-key${item.id}`}
                                thumbUrl={item.thumbUrl}
                                title={item.title}
                                excerpt={item.excerpt}
                                author={item.author}
                                authorUrl={item.authorUrl}
                                category={item.category}
                                categoryUrl={item.categoryUrl}
                                id={item.id}
                            />
                        </Link>
                    ))}
                </PostArea>
            </Container>
        </SectionWrapper>
    );
};

export default BlogSection;
