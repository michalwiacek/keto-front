import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import Markdown from 'react-remarkable';

const ArticleBody = ({ className, body }) => {
  return (
    <>
      <div className="article-body" id="article-body">
        <Markdown source={body} />
      </div>
      <span id="article-end" />
    </>
  );
};

export default ArticleBody;
