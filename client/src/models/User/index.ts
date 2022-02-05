import { ChangeProfileInfoRequest } from "./../../interfaces/requests/ChangeProfileInfoRequest";
import { createEffect, createStore } from "effector-logger";
import { LoginRequest, RegistrationRequest } from "../../interfaces/requests";
import { User } from "../../interfaces/models";

export const $LoginStore = createStore<boolean>(true, {
	name: "LoginStore",
});

export const $UserStore = createStore<User>(
	{
		id: 0,
		userName: "",
		status: "",
		photo: "",
		phone: "",
		email: "",
		organization: "",
	},
	{ name: "UserStore" }
);

export const $AuthorizationStore = createStore<boolean>(true, {
	name: "authorizationStore",
});

export const loginFx = createEffect<LoginRequest, User>("loginFx");

export const registrationFx = createEffect<RegistrationRequest, void>(
	"registrationFx"
);

export const logoutFx = createEffect<void, void>("logoutFx");

export const authFx = createEffect<void, User>("authFx");

export const changeProfileInfoFx = createEffect<
	ChangeProfileInfoRequest,
	ChangeProfileInfoRequest
>("changeProfileInfoFx");
