import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({ className, author, authorUrl, category, categoryUrl, thumbUrl, title, excerpt, id }) => {
  // Add all classes to an array
  const addAllClasses = ['blog_post'];

  return (
    <div className={addAllClasses.join(' ')}>
          <div className="thumbnail">
            <img src={thumbUrl} alt={title} />
          </div>
        <div className='text'>
          <a href={categoryUrl}>
            <h5>{category}</h5>
          </a>
            <h3 className="title">
              <span className="hover-line">
                {title}
              </span>
            </h3>
          <h6 className="hover-fade">By&nbsp;<a href={authorUrl}>{author}</a></h6>
        </div>
    </div>
  );
};


BlogPost.propTypes = {
  className: PropTypes.string,
  thumbUrl: PropTypes.string,
  author: PropTypes.string,
  authorUrl: PropTypes.string,
  categoryUrl: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  id: PropTypes.number,
};

export default BlogPost;