import { createEffect, createStore } from "effector-logger";
import { LoginRequest, RegistrationRequest } from "../../interfaces/requests";

export interface UserStore {
	readonly id: number;
	readonly userName: string;
	readonly email: string;
	readonly phone: string;
	readonly status: string;
	readonly photo: string;
	readonly organization: string;
}

export const $LoginStore = createStore<boolean>(false, {
	name: "LoginStore",
});

export const $UserStore = createStore<UserStore>(
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

export const loginFx = createEffect<LoginRequest, UserStore>("loginFx");

export const registrationFx = createEffect<RegistrationRequest, void>(
	"registrationFx"
);

export const logoutFx = createEffect<void, void>("logoutFx");
