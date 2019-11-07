import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BlogPost = ({ className, author, authorUrl, category, categoryUrl, thumbUrl, title, excerpt, id }) => {
    // Add all classes to an array
    const addAllClasses = ['blog_post'];
    const ImageStyle = styled.div`
        z-index: 9;
        background-size: cover;
        opacity: 0;
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-position: center center;
        transition: all 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
    `;
    return (
        <div className={addAllClasses.join(' ')}>
            <a href={title}>
                <div className="thumbnail">
                    <img src={thumbUrl} alt={title} />
                    <ImageStyle style={{ backgroundImage: `url(${thumbUrl})` }} />
                </div>
            </a>
            <div className="text">
                <a href={categoryUrl}>
                    <h5>{category}</h5>
                </a>
                <a href={title}>
                    <h3 className="title">
                        <span className="hover-line">{title}</span>
                    </h3>
                </a>
                <h6 className="hover-fade">
                    By&nbsp;<a href={authorUrl}>{author}</a>
                </h6>
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
