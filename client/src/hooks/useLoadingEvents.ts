import { useStore } from "effector-react";
import { loadSchoolEventsFx } from "../models/SchoolEvents";

export const useLoadingEvents = () => {
	return useStore(loadSchoolEventsFx.pending);
};
