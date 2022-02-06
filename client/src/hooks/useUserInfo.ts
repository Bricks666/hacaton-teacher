import { useStore } from "effector-react";
import { $ProfileStore } from "../models/Profile";

export const useUserInfo = () => {
	return useStore($ProfileStore);
};
