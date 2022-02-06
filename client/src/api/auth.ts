import { ChangeProfileInfoRequest, LoginRequest } from "../interfaces/requests";
import { mockServerResponse, mockProfile } from "../mocks";

export const auth = async () => {
	return await mockServerResponse(400, mockProfile);
};

export const registration = async () => {
	return await mockServerResponse(300, undefined);
};

export const login = async ({ login, password, remember }: LoginRequest) => {
	return await mockServerResponse(300, mockProfile);
};

export const logout = async () => {
	return await mockServerResponse(300, undefined);
};

export const changeProfileInfo = async (newInfo: ChangeProfileInfoRequest) => {
	return await mockServerResponse(300, newInfo);
};
