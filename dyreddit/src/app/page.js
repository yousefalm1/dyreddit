import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-screen h-[90vh] flex flex-col justify-center items-center md:flex-col font-mono">
      <h1 className="text-center text-[60px]">Welcome To DY Reddit</h1>
      <div className="flex flex-row mt-4 space-x-7">
        <Link
          href="/posts/addPost"
          className="bg-gray-700 py-4 px-8 rounded-3xl hover:bg-gray-500 w-max"
        >
          Add Post
        </Link>
        <Link
          href="/posts/viewPosts"
          className="bg-gray-700 py-4 px-8 rounded-3xl hover:bg-gray-500 w-max"
        >
          View Posts
        </Link>
      </div>
    </div>
  );
}
