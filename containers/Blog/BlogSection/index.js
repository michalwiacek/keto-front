import React from 'react';
import Link from 'next/link';
import Container from '../../../components/Container';
import Heading from '../../../components/elements/Heading';
import BlogPost from '../../../components/BlogPost';

import SectionWrapper, {
  SectionHeader,
  TitleArea,
  LinkArea,
  Text,
  PostArea,
} from './blogSection.style';

import { posts } from '../../../common/src/data';

const BlogSection = () => {
  return (
    <SectionWrapper id="blog">
      <Container width="1260px">
        <SectionHeader>
          <TitleArea>
            <Heading content="Blog & News Updates" />
            <Text>
              People around the world are raising money for what they are
              passionate about. Get The Latest PayBear Updates
              <Link href="#1">
                <a className="link">Join us on Community</a>
              </Link>
            </Text>
          </TitleArea>
          <LinkArea>
            <Link href="#1">
              <a className="text__btn">
                <span className="text">View all blog posts</span>
                <span className="arrow" />
              </a>
            </Link>
          </LinkArea>
        </SectionHeader>
        <PostArea>
          {posts.map(item => (
            <BlogPost
              key={`blog__post-key${item.id}`}
              thumbUrl={item.thumbUrl}
              title={item.title}
              excerpt={item.excerpt}
              link={
                <Link href="/blog/[id]" as={`/blog/${item.id}`}>
                  <a className="learn__more-btn">
                    <span className="hyphen"></span>
                    <span className="btn_text">{item.btnText}</span>
                  </a>
                </Link>
              }
            />
          ))}
        </PostArea>
      </Container>
    </SectionWrapper>
  );
};

export default BlogSection;