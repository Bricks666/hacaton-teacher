import { createEffect } from "effector";
import { FormSubmitHandler } from "../interfaces/common";
import { LoginRequest } from "../interfaces/requests";

export const loginFx = createEffect<FormSubmitHandler<LoginRequest>>(
	(loginValues) =>
		new Promise((resolve) => {
			setTimeout(() => {
				// eslint-disable-next-line no-alert
				alert(JSON.stringify(loginValues));
				resolve(null);
			}, 3000);
		})
);
