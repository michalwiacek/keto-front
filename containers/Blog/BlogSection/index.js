import React from 'react';
import Container from '../../../components/Container';
import RecentStories from '../RecentStories';

import { posts, featuredPost } from '../../../common/src/data';
import SectionWrapper, { FeaturedArea, PostArea } from './blogSection.style';

const BlogSection = () => {
    return (
        <SectionWrapper id="blog">
            <Container width="1260px">
                <FeaturedArea>
                    <div className="featured_post">
                        <div className="thumbnail">
                            <img src={featuredPost.thumbUrl} alt={featuredPost.title} />
                        </div>
                        <div className="text">
                            <a href={featuredPost.categoryUrl}>
                                <h5>{featuredPost.category}</h5>
                            </a>
                            <a href="title">
                                <h3 className="title">
                                    <span className="hover-line">{featuredPost.title}</span>
                                </h3>
                                <p className="excerpt">{featuredPost.excerpt}</p>
                            </a>
                            <h6 className="hover-fade">
                                By&nbsp;<a href={featuredPost.authorUrl}>{featuredPost.author}</a>
                            </h6>
                        </div>
                    </div>
                </FeaturedArea>
                <PostArea id="recent-stories">
                    <RecentStories />
                </PostArea>
            </Container>
        </SectionWrapper>
    );
};

export default BlogSection;
