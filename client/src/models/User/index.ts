import { createDomain } from "effector-logger";
import {
	LoginRequest,
	RegistrationRequest,
	ChangeProfileInfoRequest,
} from "../../interfaces/requests";

export interface User {
	readonly id: number;
	readonly userName: string;
	readonly email: string;
	readonly phone: string;
	readonly status: string;
	readonly photo: string;
	readonly organization: string;
}

export const UserDomain = createDomain("UserDomain");

export const $LoginStore = UserDomain.createStore<boolean>(true, {
	name: "LoginStore",
});

export const $UserStore = UserDomain.createStore<User>(
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

export const $AuthorizationStore = UserDomain.createStore<boolean>(true, {
	name: "authorizationStore",
});

export const loginFx = UserDomain.createEffect<LoginRequest, User>("loginFx");

export const registrationFx = UserDomain.createEffect<
	RegistrationRequest,
	void
>("registrationFx");

export const logoutFx = UserDomain.createEffect<void, void>("logoutFx");

export const authFx = UserDomain.createEffect<void, User>("authFx");

export const changeProfileInfoFx = UserDomain.createEffect<
	ChangeProfileInfoRequest,
	ChangeProfileInfoRequest
>("changeProfileInfoFx");
