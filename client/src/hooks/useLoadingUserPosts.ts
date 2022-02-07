import { useStore } from "effector-react";
import { $LoadingUserPosts } from "../models/Posts";

export const useLoadingUserPosts = () => {
	return useStore($LoadingUserPosts);
};
