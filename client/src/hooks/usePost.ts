import { useStoreMap } from "effector-react";
import { Post } from "../interfaces/models";
import { $Posts } from "../models/Posts";

export const usePost = (postId: number | string | null): Post | null => {
	return useStoreMap(
		$Posts,
		(posts) => (postId && posts.find((post) => post.id === +postId)) || null
	);
};
