import { useStore } from "effector-react";
import { $LoadingPosts } from "../models/Posts";

export const useLoadingPosts = () => {
	return useStore($LoadingPosts);
};
