import { createEffect } from "effector";
import { SubmitHandler } from "../interfaces/common";
import { RegistrationRequest } from "../interfaces/requests";

export const registrationFx = createEffect<SubmitHandler<RegistrationRequest>>(
	(values) => {
		console.log(values);
		return new Promise((resolve) => {
			setTimeout(resolve, 3000);
		});
	}
);
