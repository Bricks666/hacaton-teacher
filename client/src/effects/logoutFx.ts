import { createEffect } from "effector";
import { SubmitHandler } from "../interfaces/common";

export const logoutFx = createEffect<SubmitHandler<unknown>>(() => {
	return new Promise((resolve) => {
		setTimeout(resolve, 3000);
	});
});
