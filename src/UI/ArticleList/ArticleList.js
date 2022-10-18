import React from "react";
import { Link } from "react-router-dom";

import Card from "../card/Card";
import "./ArticleList.css";

const DUMMY_ARTICLE = [
  {
    id: "p1",
    uid: "u1",
    author: "abc",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknSjK1BnjO8mhUQqK0fNHUfsxSoGDprmG3APqJIEn7fdxb2-pY0ANvvfI-Xtq6TATG_4&usqp=CAU",
    header: "Title",
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

const AricleList = () => {
  return (
    <>
      {DUMMY_ARTICLE.map((blog) => {
        return (
          <li className="blog-list">
            <Card>
              <Link to={`/${blog.id}/blog`}>
                <div className="blog-header">
                  <h2>{blog.header}</h2>
                </div>
                <div className="blog-likecount">Likes: {blog.likeCount}</div>
                <div>Author: {blog.author}</div>
              </Link>
            </Card>
          </li>
        );
      })}
    </>
  );
};

export default AricleList;
