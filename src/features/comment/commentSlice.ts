// features/comment/commentSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import Comment from "../../types/Comment";
import { fetchComments, postComment } from "./commentService";

interface CommentState {
  comments: Comment[];
}

const initialState: CommentState = {
  comments: [],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    },
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },
  },
});

export const { setComments, addComment } = commentSlice.actions;

export const fetchCommentsAsync = (): AppThunk => async (dispatch) => {
  const comments = await fetchComments();
  dispatch(setComments(comments));
};

export const postCommentAsync =
  (text: string): AppThunk =>
  async (dispatch) => {
    const newComment = await postComment(text);
    dispatch(addComment(newComment));
  };

export const selectComments = (state: any) => state.comment.comments;

export default commentSlice.reducer;
