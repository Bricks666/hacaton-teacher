import { createEffect } from "effector";
import { FormSubmitHandler } from "../interfaces/common";

export const logoutFx = createEffect<FormSubmitHandler<unknown>>(() => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(null);
		}, 3000);
	});
});
