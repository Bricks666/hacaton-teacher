import { useStore } from "effector-react";
import { $AuthStore } from "../models/Auth";

export const useAuthInfo = () => {
	return useStore($AuthStore);
};
