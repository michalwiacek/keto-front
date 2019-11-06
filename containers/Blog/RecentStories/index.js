import React from 'react';
import gql from 'graphql-tag';
import Link from 'next/link';
import { graphql } from 'react-apollo';
import BlogPost from '../../../components/BlogPost';

// interface Post {
//   id: number;
//   title: string;
//   description: string;
//   mainImageUrl: string;
//   user: User;
// }

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// interface PostData {
//   posts: Post[];
// }

export const articles = gql`
    query articles {
        articles {
            id
            title
            description
            # mainImageUrl
            publishedAt
            user {
                id
                name
                email
            }
        }
    }
`;

function RecentStories({ data: { loading, error, articles } }) {
    if (error) return <p> Error loading posts</p>;
    if (articles && articles.length) {
        return (
            <div>
                <h3>Recent stories</h3>
                {articles.map(item => (
                    <Link href="/blog/[id]" as={`/blog/${item.id}`} key={`key-${item.id}`}>
                        <BlogPost
                            key={`blog__post-key${item.id}`}
                            // thumbUrl={item.mainImageUrl}
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
            </div>
        );
    }
    return loading ? <div>Loading ...</div> : '';
}
export default graphql(articles)(RecentStories);
