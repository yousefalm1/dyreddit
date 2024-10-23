'use client';
import { useState } from 'react';
import { deletePost } from '@/actions';

function DeletePostButton({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    deletePost(post.id);
    setIsModalOpen(false); // Close the modal after the post is deleted
  };

  return (
    <>
      <button
        className="bg-red-500 py-4 px-14 rounded-xl mt-[200px] hover:bg-red-600 transition ease-in"
        onClick={() => setIsModalOpen(true)}
      >
        Delete
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="w-[250px] flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
            <div className="text-center p-3 flex-auto justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 flex items-center text-gray-600 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-xl font-bold py-4 text-gray-200">
                Are you sure?
              </h2>
              <p className="text-sm text-gray-500 px-2">
                Do you really want to delete this post? This action cannot be
                undone.
              </p>
            </div>
            <div className="p-2 mt-2 text-center space-x-1 md:block">
              <button
                className="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300"
                onClick={handleDelete}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeletePostButton;
