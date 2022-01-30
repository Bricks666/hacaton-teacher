import { useStore } from "effector-react";
import { $LoginStore } from "../models/Login";
import { SimpleFunction } from "../interfaces/common";

export const useIsLogin: SimpleFunction<boolean> = () => {
	return useStore($LoginStore);
};
