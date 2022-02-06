import { useSearchParams } from "react-router-dom";

export const useGetParam = (param: string): string | null => {
	const [getParams] = useSearchParams();

	return getParams.get(param);
};
