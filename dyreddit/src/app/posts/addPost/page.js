import { createPost } from '@/actions';

const AddPost = () => {
  return (
    <div className="bg-gray-700">
      <div className=" text-center mt-11 font-extrabold text-4xl">
        <h1>Add Your Post</h1>
      </div>

      <form action={createPost} className="max-w-md mx-auto mt-8 text-black">
        <div className="mb-4">
          <label className="block mb-1">Post Title</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            name="title"
            title="Post Title"
            placeholder="Enter title"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Content</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2"
            style={{ resize: 'none' }}
            rows="4"
            name="description"
            title="Post Description"
            placeholder="Enter content"
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
    </div>
  );
};

export default AddPost;
