import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./comments.less";
import {
  postCommentAsync,
  selectComments,
} from "../../features/comment/commentSlice";

import { RootState, AppDispatch } from "../../app/store"; // Import RootState and AppDispatch types
import Comment from "../../types/Comment";

const CommentComponent: React.FC = () => {
  console.log("khsbch");
  const [text, setText] = useState<string>("");
  const dispatch: AppDispatch = useDispatch(); // Specify the type for dispatch

  const comments: Comment[] = useSelector((state: RootState) =>
    selectComments(state)
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(postCommentAsync(text.trim()));
    setText("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="maincom">
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentComponent;
