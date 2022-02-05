import { useStore } from "effector-react";
import { useEffect } from "react";
import { $UserPosts, loadUserPostsFx } from "../models/UserPosts";

export const useUserPosts = () => {
	const posts = useStore($UserPosts);

	useEffect(() => {
		if (!posts.length) {
			loadUserPostsFx();
		}
	}, [posts.length]);

	return posts;
};
