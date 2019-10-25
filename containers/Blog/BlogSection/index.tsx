import React from 'react';
import Link from 'next/link';
import Container from 'components/Container';
import BlogPost from 'components/BlogPost';
import { loadData } from 'lib/posts/actions';
import withApollo from 'lib/withApollo';
import withReduxSaga from 'lib/withReduxSaga';

import SectionWrapper, {
  FeaturedArea,
  PostArea,
} from './blogSection.style';

import { posts, featured_post } from 'common/src/data';
const BlogSection = () => {
  return (
    <SectionWrapper id="blog">
      <Container noGutter mobileGutter width="1260px" className="container">
        <FeaturedArea>
            <Link href="blog/[id]" as={`/blog/${featured_post.title}`}>
                <a>
                  <div className='featured_post'>
                      <div className="thumbnail">
                        <img src={featured_post.thumbUrl} alt={featured_post.title} />
                      </div>
                      <div className='text'>
                        <a href={featured_post.categoryUrl}>
                          <h5>{featured_post.category}</h5>
                        </a>
                        <a href={'title'}>
                          <h3 className="title">
                            <span className="hover-line">
                              {featured_post.title}
                            </span>
                          </h3>
                          <p className="excerpt">{featured_post.excerpt}</p>
                        </a>
                        <h6 className="hover-fade">By&nbsp;<a href={featured_post.authorUrl}>{featured_post.author}</a></h6>
                      </div>
                  </div>
                </a>
            </Link>
        </FeaturedArea>
        <PostArea id='recent-stories'>
          <h3>Recent stories</h3>
          {posts.map(item => (
            <Link href="/blog/[id]" as={`/blog/${item.title}`}>
              <a>
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
              </a>
            </Link>
          ))}
        </PostArea>
      </Container>
    </SectionWrapper>
  );
};
BlogSection.defaultProps = {};

// BlogSection.getInitialProps = async ({ ctx: {store} }) => {
//     store.dispatch(loadData())
// };

export default withReduxSaga(withApollo(BlogSection));
