import { LoginRequest } from "../interfaces/requests";
import { mockServerResponse, mockUsers } from "../mocks";

export const auth = async () => {
	return await mockServerResponse(300, mockUsers[0]);
};

export const registration = async () => {
	return await mockServerResponse(300, undefined);
};

export const login = async ({ login, password }: LoginRequest) => {
	const user = mockUsers.find((user) => user.login === login);

	if (!user || user.password !== password) {
		throw new Error();
	}

	return await mockServerResponse(300, {
		id: user.id,
		userName: user.userName,
		photo: user.photo,
	});
};

export const logout = async () => {
	return await mockServerResponse(300, undefined);
};
