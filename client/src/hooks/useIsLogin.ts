import { useStore } from "effector-react";
import { $LoginStore } from "../models/Auth";
import { SimpleFunction } from "../interfaces/common";

export const useIsLogin: SimpleFunction<boolean> = () => {
	return useStore($LoginStore);
};
