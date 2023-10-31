import React, { useState, useEffect } from 'react';
import FeedComponent from './FeedComponent';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await FeedComponent.readFeedPosts(10);
      setPosts(response);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;