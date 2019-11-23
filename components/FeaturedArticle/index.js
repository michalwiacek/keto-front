import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import Link from 'next/link';

export const lastFeaturedArticle = gql`
  query {
    lastFeaturedArticle {
      id
      title
      publishedAt
      mainImageUrl
      readingTime
      user {
        name
        avatarUrl
      }
      category {
        name
      }
    }
  }
`;

function FeaturedArticle({ data: { loading, error, lastFeaturedArticle } }) {
  if (error) return <p>Error loading blog post.</p>;
  if (lastFeaturedArticle) {
    return (
      <div className="featured_post">
        <Link href="/blog/[id]" as={`/blog/${lastFeaturedArticle.id}`} key={`key-${lastFeaturedArticle.id}`}>
          <div className="image-wrapper">
            <img src={lastFeaturedArticle.mainImageUrl} alt={lastFeaturedArticle.title} />
          </div>
        </Link>
        <div className="copy-wrapper">
          <h5>{lastFeaturedArticle.category.name}</h5>
          <Link href="/blog/[id]" as={`/blog/${lastFeaturedArticle.id}`} key={`key-${lastFeaturedArticle.id}`}>
            <a href="title">
              <h3 className="title">
                <span className="hover-line">{lastFeaturedArticle.title}</span>
              </h3>
            </a>
          </Link>
          <h6 className="hover-fade">
            By&nbsp;<a href={lastFeaturedArticle.user.name}>{lastFeaturedArticle.user.name}</a>
          </h6>
        </div>
      </div>
    );
  }
  return loading ? <div>Loading ...</div> : '';
}

FeaturedArticle.propTypes = {
  className: PropTypes.string,
  mainImageUrl: PropTypes.string,
  user: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
};

export default graphql(lastFeaturedArticle)(FeaturedArticle);
