import { useStore } from "effector-react";
import { useParams } from "react-router-dom";
import { $AuthStore } from "../models/Auth";

export const useIsPageOwner = (): boolean => {
	const params = useParams();
	const { id: authId } = useStore($AuthStore);
	return !!params.id && +params.id === +authId;
};
