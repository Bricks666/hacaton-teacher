import { useStoreMap } from "effector-react";
import { useGetParam } from ".";
import { getParams } from "../config";
import { $Posts, Post } from "../models/Posts";

export const useSelectedPost = (): Post | null => {
	const postId = useGetParam(getParams.post);

	return (
		useStoreMap(
			$Posts,
			(posts) => postId && posts.find((post) => post.id === +postId)
		) || null
	);
};
