import { useStore } from "effector-react";
import { $AuthorizationStore } from "../models/Auth";

export const useIsAuthorization = () => {
	return useStore($AuthorizationStore);
};
