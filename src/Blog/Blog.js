import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import "./Blog.css";

const DUMMY_ARTICLE = [
  {
    id: "p1",
    uid: "u1",
    author: "abc",
    img: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png",
    header: "Title of the Blog",
    likeCount: 0,
    content: "Content of article/Blog",
  },
  {
    id: "p2",
    uid: "u2",
    author: "def",
    img: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWlmZmVsJTIwdG93ZXJ8ZW58MHx8MHx8&w=1000&q=80",
    header: "Eiffel Tower",
    likeCount: 0,
    content: "Content of article/Blog",
  },
];

const Blog = () => {
  const auth = useContext(AuthContext);
  const id = useParams().pid;
  const LoadedBlog = DUMMY_ARTICLE.filter((blog) => blog.id === id);

  const incrementLikeCount = () => {};

  return (
    <div className="container-fluid blog">
      <div>
        <h1>{LoadedBlog[0].header}</h1>
      </div>
      <div className="img-fluid">
        <img src={LoadedBlog[0].img} alt="loaded"></img>
      </div>
      <div>
        <h2>{LoadedBlog[0].content}</h2>
      </div>
      {auth.isLoggedIn && (
        <div>
          <button className="btn btn-light" onClick={incrementLikeCount}>
            Like: {LoadedBlog[0].likeCount}
          </button>
          <button className="btn btn-outline-info">Follow Me!</button>
        </div>
      )}
    </div>
  );
};

export default Blog;
