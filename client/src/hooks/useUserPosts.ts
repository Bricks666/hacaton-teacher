import { useStore } from "effector-react";
import { useEffect } from "react";
import { $UserPosts, loadUserPostsFx } from "../models/Posts";

export const useUserPosts = () => {
	const posts = useStore($UserPosts);

	useEffect(() => {
		if (!posts.length) {
			loadUserPostsFx();
		}
	}, [posts.length]);

	return posts;
};
