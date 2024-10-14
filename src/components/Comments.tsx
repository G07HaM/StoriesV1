import React, { useState } from 'react';

interface Comment {
  id: number;
  user: string;
  text: string;
  date: string;
}

interface CommentsProps {
  comments: Comment[];
  addComment: (newComment: { user: string; text: string }) => void;
}

const Comments: React.FC<CommentsProps> = ({ comments, addComment }) => {
  const [newComment, setNewComment] = useState({ user: '', text: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.user.trim() && newComment.text.trim()) {
      addComment(newComment);
      setNewComment({ user: '', text: '' });
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <div className="space-y-4 mb-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{comment.user}</span>
              <span className="text-sm text-gray-500">{new Date(comment.date).toLocaleDateString()}</span>
            </div>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="user" className="block mb-1 font-medium">
            Your Name
          </label>
          <input
            type="text"
            id="user"
            value={newComment.user}
            onChange={(e) => setNewComment({ ...newComment, user: e.target.value })}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="comment" className="block mb-1 font-medium">
            Your Comment
          </label>
          <textarea
            id="comment"
            value={newComment.text}
            onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
            className="w-full px-3 py-2 border rounded-md"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default Comments;