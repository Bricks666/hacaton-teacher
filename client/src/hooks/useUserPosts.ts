import { useStore } from "effector-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { $UserPosts, loadUserPosts } from "../models/Posts";

export const useUserPosts = () => {
	const id = useParams().id;
	const posts = useStore($UserPosts);

	useEffect(() => {
		if (id && posts[0]?.authorId !== +id) {
			loadUserPosts(+id);
		}
	}, [id, posts]);

	return posts;
};
