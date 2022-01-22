import { createEffect } from "effector";
import { FormSubmitHandler } from "../interfaces/common";
import { RegistrationRequest } from "../interfaces/requests";

export const registrationFx = createEffect<
	FormSubmitHandler<RegistrationRequest>
>((values) => {
	console.log(values);
	return new Promise((resolve) => {
		setTimeout(() => resolve(null), 3000);
	});
});
