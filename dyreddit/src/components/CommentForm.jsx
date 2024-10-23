'use client';
import { addComment } from '@/actions';

const CommentForm = ({ id }) => {
  return (
    <form action={(form) => addComment(form, id)} className="mt-14">
      <div className="mb-4">
        <input
          className="w-full border border-gray-300 rounded p-2"
          name="username"
          title="Post Title"
          placeholder="Enter Username"
          required
        />
      </div>

      <div className="mb-4">
        <textarea
          className="w-full border border-gray-300 rounded p-2"
          style={{ resize: 'none' }}
          rows="4"
          name="comment"
          title="Post Description"
          placeholder="Enter Comment"
          required
        ></textarea>
      </div>

      <button
        className="w-full bg-gray-800 text-white p-2 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
