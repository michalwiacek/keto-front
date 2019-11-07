import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import Moment from 'react-moment';
import 'moment/locale/pl';

const ArticleHeader = ({ className, title, author, imageUrl, publishedAt, readingTime }) => {
  return (
    <>
      <div className="hero-container">
        <div className="image-wrapper">
          <img className="mainImage" src={imageUrl} alt={title} />
        </div>
        <div className="right">
          <div className="copy-container">
            <div className="text">
              <h5>category // TODO</h5>
              <h1 className="title">{title}</h1>
              {readingTime > 0 && <h6 className="reading-time">{readingTime} minut</h6>}
              <div className="extra-grey" />
            </div>
          </div>
          <div className="author-wrapper">
            <img className="author-avatar" src={author.avatarUrl} alt="author" />
            <h6>
              {author.name} • <Moment locale="pl" format="LL" date={publishedAt} />
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleHeader;
