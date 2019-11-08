import React from 'react';
import { withRouter } from 'next/router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Container from '../../../components/Container';
import ArticleHeader from '../../../components/ArticleHeader';
import ArticleBody from '../../../components/ArticleBody';
import SectionWrapper, { HeaderArea, ArticleBodyArea } from './postSection.style';

function PostSection({ id, data: { error, article } }) {
  if (error) return <p>Error loading blog post.</p>;
  if (article) {
    return (
      <SectionWrapper id="blogPost">
        <Container width="1400px">
          <HeaderArea>
            <ArticleHeader
              imageUrl={article.mainImageUrl}
              author={article.user}
              title={article.title}
              readingTime={article.readingTime}
              publishedAt={article.publishedAt}
            />
          </HeaderArea>
          <ArticleBodyArea>
            <ArticleBody body={article.bodyMarkdown} />
          </ArticleBodyArea>
        </Container>
      </SectionWrapper>
    );
  }
  return <div>Loading</div>;
}

const post = gql`
  query post($id: ID!) {
    article(id: $id) {
      id
      title
      bodyMarkdown
      mainImageUrl
      publishedAt
      readingTime
      user {
        id
        name
        email
        avatarUrl
      }
    }
  }
`;

const ComponentWithMutation = graphql(post, {
  options: ({ router: { query } }) => ({
    variables: {
      id: query.id,
    },
  }),
  props: ({ data }) => ({
    data,
  }),
})(PostSection);

export default withRouter(ComponentWithMutation);

// PostSection.propTypes = {
//   postId: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
// };

// PostSection.defualtProps = {
//   postId: '',
// };
