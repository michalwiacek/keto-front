import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/pl';
import avatarPlaceholder from '../../common/src/assets/images/placeholders/avatar-placeholder.png';

const ArticleHeader = ({ className, title, category, author, imageUrl, publishedAt, readingTime }) => {
  return (
    <>
      <div className="hero-container">
        <div className="image-wrapper">
          <img className="mainImage" src={imageUrl} alt={title} />
        </div>
        <div className="right">
          <div className="copy-container">
            <div className="text">
              <h5>{category}</h5>
              <h1 className="title">{title}</h1>
              {readingTime > 0 && <h6 className="reading-time">{readingTime} minut</h6>}
              <div className="extra-grey" />
            </div>
          </div>
          <div className="author-wrapper">
            <img
              className="author-avatar"
              src={author.avatarUrl}
              alt="author"
              onError={e => {
                e.target.onerror = null;
                e.target.src = avatarPlaceholder;
              }}
            />
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
