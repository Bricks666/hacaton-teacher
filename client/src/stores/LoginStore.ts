import { loginFx } from "./../effects/loginFx";
import { createStore } from "effector";
import { logoutFx } from "../effects";

interface LoginStore {
	isLogin: boolean;
}

export const $LoginStore = createStore<LoginStore>(
	{
		isLogin: false,
	},
	{
		name: "LoginStore",
	}
);

$LoginStore.on(loginFx.done, (state) => ({ ...state, isLogin: true }));
$LoginStore.on(logoutFx.done, (state) => ({ ...state, isLogin: false }));

$LoginStore.watch((state) => console.log(state));
