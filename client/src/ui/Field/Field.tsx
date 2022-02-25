import React, {
	forwardRef,
	HTMLInputTypeAttribute,
	PropsWithChildren,
} from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { ClassNameProps } from "../../interfaces/common";
import { Input } from "../Input";

interface FieldComponent extends ClassNameProps, UseFormRegisterReturn {
	readonly type?: HTMLInputTypeAttribute;
	readonly error?: FieldError;
	readonly inputClassName?: string;
	readonly errorClassName?: string;
}

export const Field = forwardRef<
	HTMLInputElement,
	PropsWithChildren<FieldComponent>
>(({ error, className, inputClassName, errorClassName, ...input }, ref) => {
	return (
		<div className={className}>
			{error && <p className={errorClassName}>{error.message}</p>}
			<Input className={inputClassName} {...input} ref={ref} />
		</div>
	);
});
