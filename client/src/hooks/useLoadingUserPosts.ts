import { useStore } from "effector-react";
import { $LoadingUserPosts } from "../models/UserPosts";

export const useLoadingUserPosts = () => {
	return useStore($LoadingUserPosts);
};
