import { useStore } from "effector-react";
import { $LoadingProfileInfo } from "../models/Profile";

export const useLoadingProfile = () => {
	return useStore($LoadingProfileInfo);
};
