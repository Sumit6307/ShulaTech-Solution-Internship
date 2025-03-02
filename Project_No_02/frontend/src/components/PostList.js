// frontend/src/components/PostList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/api/posts');
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`/api/posts/${id}`);
    setPosts(posts.filter((post) => post._id !== id));
  };

  return (
    <div>
      <Link to="/posts/new">Create New Post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
