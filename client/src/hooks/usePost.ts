import { useStoreMap } from "effector-react";
import { $Posts, Post } from "../models/Posts";

export const usePost = (postId: number | string | null): Post | null => {
	return useStoreMap(
		$Posts,
		(posts) => (postId && posts.find((post) => post.id === +postId)) || null
	);
};
