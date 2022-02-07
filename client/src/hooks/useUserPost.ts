import { useUserPosts } from ".";
import { Post } from "../models/Posts";

export const useUserPost = (postId: number | string | null): Post | null => {
	const posts = useUserPosts();
	return (postId && posts.find((post) => post.id === +postId)) || null;
};
