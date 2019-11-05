import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Link from 'next/link';
import BlogPost from '../../../components/BlogPost';

interface Post {
  id: number;
  title: string;
  description: string;
  mainImageUrl: string;
  user: User;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface PostData {
  post: Post[];
}

interface PostVars {
  id: number;
}

const GET_ALL_POSTS = gql`
  query getAllPosts() {
    articles {
      id
      title
      description
      mainImageUrl
      publishedAt
      user {
          id
          name
          email
      }
  }
  }
`;

export function RecentStories() {
  const { loading, data } = useQuery<PostData, PostVars>(
    GET_ALL_POSTS
  );
  return (
    <div>
      <h3>Recent stories</h3>
      {loading ? (
        <p>Loading ...</p>
      ) : (
            {data && data.post.map(item => (
              <Link href="/blog/[id]" as={`/blog/${item.id}`} key={`key-${item.id}`}>
                <BlogPost
                    key={`blog__post-key${item.id}`}
                    thumbUrl={item.mainImageUrl}
                    title={item.title}
                    excerpt={item.description}
                    author={item.user.name}
                    // authorUrl={item.authorUrl}
                    // category={item.category}
                    // categoryUrl={item.categoryUrl}
                    id={item.id}
                />
              </Link>
            ))}
      )}
    </div>
  );
}