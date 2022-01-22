import { useCallback } from "react";
import {
	Path,
	SubmitHandler,
	UseFormReset,
	UseFormSetError,
} from "react-hook-form";
import { FormSubmitHandler } from "../interfaces/common";

export const useCreateSubmitHandler = <T>(
	handler: FormSubmitHandler<T>,
	reset?: UseFormReset<T>,
	setError?: UseFormSetError<T>
) => {
	return useCallback<SubmitHandler<T>>(
		async (values) => {
			const errors = await handler(values);

			if (errors && setError) {
				Object.entries(errors).forEach(([field, error]) =>
					setError(field as Path<T>, error)
				);
				return;
			}

			reset && reset();
		},
		[handler, reset, setError]
	);
};
