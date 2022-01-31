import { useStore } from "effector-react";
import { $AuthorizationStore } from "../models/User";

export const useIsAuthorization = () => {
	return useStore($AuthorizationStore);
};
