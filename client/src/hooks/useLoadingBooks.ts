import { useStore } from "effector-react";
import { $LoadingBooks } from "../models/Library";

export const useLoadingBooks = () => {
	return useStore($LoadingBooks);
};
