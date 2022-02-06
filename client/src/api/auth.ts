import { ChangeProfileInfoRequest, LoginRequest } from "../interfaces/requests";
import { mockServerResponse, mockUser } from "../mocks";

export const auth = async () => {
	return await mockServerResponse(400, mockUser);
};

export const registration = async () => {
	return await mockServerResponse(300, undefined);
};

export const login = async ({ login, password, remember }: LoginRequest) => {
	return await mockServerResponse(300, mockUser);
};

export const logout = async () => {
	return await mockServerResponse(300, undefined);
};

export const changeProfileInfo = async (newInfo: ChangeProfileInfoRequest) => {
	return await mockServerResponse(300, newInfo);
};
