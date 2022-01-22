import { FieldErrors, Path, UseFormSetError } from "react-hook-form";

export const parseFormError = <T>(
	errors: FieldErrors,
	setError: UseFormSetError<T>
): void => {
	Object.entries(errors).forEach(([field, error]) =>
		setError(field as Path<T>, error)
	);
};
