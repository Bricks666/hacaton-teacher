import { useStore } from "effector-react";
import { $LoadingUserPerformances } from "../models/Performance";

export const useLoadingUserPerformances = () => {
	return useStore($LoadingUserPerformances);
};
