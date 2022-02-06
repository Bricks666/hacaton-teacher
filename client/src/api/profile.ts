import { ChangeProfileInfoRequest } from "../interfaces/requests";
import { mockProfiles, mockServerResponse } from "../mocks";
export const getProfileInfo = async (id: number | string) => {
	const profile = mockProfiles.find((profile) => profile.id === +id);

	if (!profile) {
		throw new Error();
	}

	return await mockServerResponse(300, profile);
};

export const changeProfileInfo = async (newInfo: ChangeProfileInfoRequest) => {
	return await mockServerResponse(300, newInfo);
};
