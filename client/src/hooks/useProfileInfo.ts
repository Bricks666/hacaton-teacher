import { useStore } from "effector-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { $ProfileStore, loadProfileInfo } from "../models/Profile";

export const useProfileInfo = () => {
	const profile = useStore($ProfileStore);
	const userId = useParams().id;

	useEffect(() => {
		if (userId && +userId !== profile.id) {
			loadProfileInfo(+userId);
		}
	}, [userId, profile.id]);

	return profile;
};
