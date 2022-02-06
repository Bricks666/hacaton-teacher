import { useGetParam, useUserInfo } from ".";

export const useIsPageOwner = (): boolean => {
	const paramId = useGetParam("id");
	const { id } = useUserInfo();

	return !!paramId && +paramId === id;
};
