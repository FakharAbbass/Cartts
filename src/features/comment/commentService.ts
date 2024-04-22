import Comment from "../../types/Comment";

const API_URL = "http://localhost:8000/comment";

export const fetchComments = async (): Promise<Comment[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }
  return response.json();
};

export const postComment = async (text: string): Promise<Comment> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (!response.ok) {
    throw new Error("Failed to post comment");
  }
  return response.json();
};
