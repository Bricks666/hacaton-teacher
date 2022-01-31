import { useStore } from "effector-react";
import { $UserStore } from "../models/User";

export const useUserInfo = () => {
	return useStore($UserStore);
};
