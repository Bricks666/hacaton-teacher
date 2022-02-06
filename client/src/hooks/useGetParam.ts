import { useSearchParams } from "react-router-dom";

export const useGetParam = (param: string): string | null => {
	const [GET_PARAMS] = useSearchParams();

	return GET_PARAMS.get(param);
};
