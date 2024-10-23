'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const baseUrl = `https://api-creddit.eapi.joincoded.com`;

const headers = new Headers();
headers.append('Content-Type', 'application/json');

export const createPost = async (formData) => {
  const post = Object.fromEntries(formData);

  const response = await fetch(`${baseUrl}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify(post),
  });

  const newPost = await response.json();

  revalidatePath('/posts/viewPosts');
  redirect('/posts/viewPosts');
};
export async function fetchPosts() {
  let posts;

  try {
    const response = await fetch(`${baseUrl}/posts`);
    posts = await response.json();
  } catch (error) {
    console.error('No Posts Found');
    redirect('/');
  }
  return posts;
}
export async function deletePost(id) {
  const response = await fetch(`${baseUrl}/posts/${id}`, {
    method: 'DELETE',
    headers,
  });

  revalidatePath('posts/viewPosts');
  redirect('/posts/viewPosts');
}

export async function fetchPostDetails(id) {
  let post;
  try {
    const response = await fetch(`${baseUrl}/posts/${id}`);
    post = await response.json();
    console.log(post);
  } catch (error) {
    console.error('post not found');
    redirect('/posts/viewPosts');
  }

  return post;

  redirect(`/posts`);
  revalidatePath(`/posts/viewPosts/[id]`, 'page');
}

export const addComment = async (formData, id) => {
  const comment = Object.fromEntries(formData);
  console.log(comment, id);
  // /posts/:id/comments
  const response = await fetch(`${baseUrl}/posts/${id}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify(comment),
  });

  const newComment = await response.json();
};
