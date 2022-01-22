import { FieldErrors, UnpackNestedValue } from "react-hook-form";

export type SimpleFunction<R> = () => R;

export interface ClassNameComponent {
	className?: string;
}

export type FormSubmitHandler<T> = (
	values: UnpackNestedValue<T>
) => Promise<null | FieldErrors<T>>;
