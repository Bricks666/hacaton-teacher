import { useStoreMap } from "effector-react";
import { SimpleFunction } from "../interfaces/common";
import { $LoginStore } from "../stores";

export const useIsLogin: SimpleFunction<boolean> = () => {
	return useStoreMap($LoginStore, (state) => state.isLogin);
};
