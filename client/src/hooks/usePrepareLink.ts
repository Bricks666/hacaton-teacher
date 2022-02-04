import { useLocation } from "react-router-dom";

interface UsePrepareLinkResponse {
	readonly pathname: string;
	readonly search: string;
	readonly hash: string;
}

interface UserPrepareLinkParams {
	readonly query?: Record<string, string>;
	readonly savePrevQuery?: boolean;
}
/* TODO: Можно сделать так, чтобы можно было открыть несколько popup'ов, если понадобится */

export const usePrepareLink = ({
	query = {},
	savePrevQuery = true,
}: UserPrepareLinkParams): UsePrepareLinkResponse => {
	const location = useLocation();

	const newQuery = savePrevQuery
		? new URLSearchParams(location.search)
		: new URLSearchParams();

	Object.entries(query).forEach(([key, value]) => newQuery.set(key, value));
	return {
		hash: location.hash,
		pathname: location.pathname,
		search: newQuery.toString() ? `?${newQuery.toString()}` : "",
	};
};
