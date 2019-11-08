import React from 'react';
import ReactMarkdown from 'react-markdown';

const ArticleBody = ({ className, body }) => {
  return (
    <>
      <div className="article-body" id="article-body">
        <ReactMarkdown source={body} />
      </div>
      <span id="article-end" />
    </>
  );
};

export default ArticleBody;
