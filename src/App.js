import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GetPosts from "./components/GetPosts";
import GetComments from "./components/GetComments";
import PostPosts from "./components/PostPosts";
import PutPosts from "./components/PutPosts";
import DeletePosts from "./components/DeletePosts";
import "./App.css";

function App() {
  //get posts
  const [getPostNum, setGetPostNum] = useState("");
  //get comments
  const [getCommentNum, setGetCommentNum] = useState("");
  //post posts
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  //put posts
  const [putPostNum, setPutPostNum] = useState("");
  const [putTitle, setPutTitle] = useState("");
  const [putBody, setPutBody] = useState("");
  const [putUserId, setPutUserId] = useState("");
  //delete posts
  const [deletePostNum, setDeletePostNum] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/getposts"
          element={
            <GetPosts getPostNum={getPostNum} setGetPostNum={setGetPostNum} />
          }
        />
        <Route
          path="/getcomments"
          element={
            <GetComments
              getCommentNum={getCommentNum}
              setGetCommentNum={setGetCommentNum}
            />
          }
        />
        <Route
          path="/postposts"
          element={
            <PostPosts
              title={title}
              setTitle={setTitle}
              body={body}
              setBody={setBody}
              userId={userId}
              setUserId={setUserId}
            />
          }
        />
        <Route
          path="/putposts"
          element={
            <PutPosts
              putTitle={putTitle}
              setPutTitle={setPutTitle}
              putBody={putBody}
              setPutBody={setPutBody}
              putUserId={putUserId}
              setPutUserId={setPutUserId}
              putPostNum={putPostNum}
              setPutPostNum={setPutPostNum}
            />
          }
        />
        <Route
          path="/deleteposts"
          element={
            <DeletePosts
              deletePostNum={deletePostNum}
              setDeletePostNum={setDeletePostNum}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
