// src/components/PostDetail.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        console.error('Error fetching the post:', error);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to={`/posts/${post._id}/edit`}>Edit Post</Link>
    </div>
  );
};

export default PostDetail;
