import React from 'react';
import Link from 'next/link';
import Container from '../../../components/Container';
import RecentStories from '../RecentStories';
import FeaturedArticle from '../../../components/FeaturedArticle';
import SectionWrapper, { FeaturedArea, PostArea } from './blogSection.style';

const BlogSection = () => {
  return (
    <SectionWrapper id="blog">
      <Container width="1400px" noGutter mobileGutter>
        <FeaturedArea>
          <FeaturedArticle />
        </FeaturedArea>
        <PostArea id="recent-stories">
          <RecentStories />
        </PostArea>
      </Container>
    </SectionWrapper>
  );
};

export default BlogSection;
