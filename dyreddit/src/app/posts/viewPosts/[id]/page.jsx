import { fetchPostDetails } from '@/actions';
import Link from 'next/link';
import DeletePostButton from '@/components/DeletePostButton';
import CommentForm from '@/components/CommentForm';

const PostDetails = async ({ params }) => {
  const { id } = await params;

  let post = await fetchPostDetails(id);

  const { title, description } = post;

  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-700 ">
      <div class="w-[700px] h-[700px] bg-gray-100 rounded-xl shadow-2xl p-4 mt-[-300px]">
        <div class="flex items-center p-3">
          <Link href="/posts/viewPosts" class="px-1">
            <span class="w-6 h-6 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
          </Link>
        </div>
        <div class="text-center mt-4">
          <h1 class="text-xl text-black font-bold ">{title}</h1>
          <p class="text-gray-600 mt-4">{description}</p>
          <CommentForm id={id} />
          <DeletePostButton post={post} />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
