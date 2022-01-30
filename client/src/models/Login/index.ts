import { createEffect, createStore } from "effector-logger";
import { LoginRequest, RegistrationRequest } from "../../interfaces/requests";

export const $LoginStore = createStore<boolean>(false, {
	name: "LoginStore",
});

export const loginFx = createEffect<LoginRequest, void>("loginFx");

export const registrationFx = createEffect<RegistrationRequest, void>(
	"registrationFx"
);

export const logoutFx = createEffect<void, void>("logoutFx");
