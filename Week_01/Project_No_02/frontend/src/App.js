// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import PostDetail from './components/PostDetail';

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>Blog App</h1>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/new" element={<CreatePost />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
