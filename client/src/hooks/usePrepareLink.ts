import { useLocation } from "react-router-dom";

interface UsePrepareLinkResponse {
	readonly pathname: string;
	readonly search: string;
	readonly hash: string;
}

interface UserPrepareLinkParams {
	readonly query?: Record<string, string | number>;
	readonly savePrevQuery?: boolean;
	readonly addQueryParam?: Record<string, string | number>;
}
/* TODO: Можно сделать так, чтобы можно было открыть несколько popup'ов, если понадобится */

export const usePrepareLink = ({
	query = {},
	savePrevQuery = true,
	addQueryParam = {},
}: UserPrepareLinkParams): UsePrepareLinkResponse => {
	const location = useLocation();

	const newQuery = savePrevQuery
		? new URLSearchParams(location.search)
		: new URLSearchParams();

	Object.entries(query).forEach(([key, value]) =>
		newQuery.set(key, value.toString())
	);

	Object.entries(addQueryParam).forEach(([key, value]) => {
		const queryValue = newQuery.get(key);
		const currentValues = queryValue?.split(",");
		const newValues = currentValues
			? `${currentValues.join(",")},${value}`
			: value.toString();
		newQuery.set(key, newValues);
	});

	return {
		hash: location.hash,
		pathname: location.pathname,
		search: newQuery.toString() ? `?${newQuery.toString()}` : "",
	};
};
