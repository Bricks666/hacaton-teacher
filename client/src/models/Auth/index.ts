import { createDomain } from "effector-logger";
import { LoginRequest, RegistrationRequest } from "../../interfaces/requests";

interface Auth {
	readonly id: number;
	readonly userName: string;
	readonly photo: string;
}

export const AuthDomain = createDomain("AuthDomain");

export const $AuthStore = AuthDomain.createStore<Auth>(
	{ id: 0, photo: "", userName: "" },
	{
		name: "AuthStore",
	}
);
export const $AuthorizationStore = AuthDomain.createStore<boolean>(true, {
	name: "authorizationStore",
});
export const $LoginStore = AuthDomain.createStore<boolean>(true, {
	name: "LoginStore",
});

export const loginFx = AuthDomain.createEffect<LoginRequest, Auth>("loginFx");
export const registrationFx = AuthDomain.createEffect<
	RegistrationRequest,
	void
>("registrationFx");
export const logoutFx = AuthDomain.createEffect<void, void>("logoutFx");
export const authFx = AuthDomain.createEffect<void, Auth>("authFx");

export const auth = AuthDomain.createEvent<void>("auth");
export const login = AuthDomain.createEvent<LoginRequest>("login");
export const registration =
	AuthDomain.createEvent<RegistrationRequest>("registration");
export const logout = AuthDomain.createEvent<void>("logout");
