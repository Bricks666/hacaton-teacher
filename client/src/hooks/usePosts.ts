import { useEffect } from "react";
import { useStore } from "effector-react";
import { $Posts, loadPostsFx } from "../models/Posts";

export const usePosts = () => {
	const posts = useStore($Posts);

	useEffect(() => {
		if (!posts.length) {
			loadPostsFx();
		}
	}, [posts.length]);

	return posts;
};
