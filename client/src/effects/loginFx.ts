import { createEffect } from "effector";
import { SubmitHandler } from "../interfaces/common";
import { LoginRequest } from "../interfaces/requests";

export const loginFx = createEffect<SubmitHandler<LoginRequest>>(
	(loginValues) =>
		new Promise((resolve) => {
			setTimeout(() => {
				// eslint-disable-next-line no-alert
				alert(JSON.stringify(loginValues));
				resolve();
			}, 3000);
		})
);
