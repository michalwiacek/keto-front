import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({ className, author, authorUrl, category, categoryUrl, thumbUrl, title, excerpt, id }) => {
  // Add all classes to an array
  const addAllClasses = ['blog_post'];
  const [hoverRef, isHovered] = useHover();

  function useHover() {
    const [value, setValue] = useState(false);
  
    const ref = useRef(null);
  
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
  
    useEffect(() => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
  
        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
  
      // If we didn't set up any listeners, we won't need to unsubscribe from anything.
      return () => {};
    }, [ref.current]); // Ensure we remove and re-add the listeners if and only if the ref changes.
  
    return [ref, value];
  }
  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <div className={addAllClasses.join(' ')}
         ref={hoverRef}>
        <a>
          <div className="thumbnail">
            <img src={thumbUrl} alt={title} />
          </div>
        </a>
        <div className='text'>
          <a href={categoryUrl}>
            <h5>{category}</h5>
          </a>
          <a href={'title'}>
            <h3 className="title">
              <span className={isHovered ? 'hover-line' : ''}>
                {title}
              </span>
            </h3>
          </a>
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