import React from 'react';
import Link from 'next/link';
import Container from '../../../components/Container';
import SectionWrapper, { FeaturedArea, PostArea } from './blogSection.style';

const RecipesSection = () => {
  return (
    <SectionWrapper id="blog">
      <Container width="1400px">
        <FeaturedArea>zajebisty przepis</FeaturedArea>
        <PostArea id="recent-stories">
          <ul>
            <li>przepis 1</li>

            <li>przepis 2</li>
          </ul>
        </PostArea>
      </Container>
    </SectionWrapper>
  );
};

export default RecipesSection;
