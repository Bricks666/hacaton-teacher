import React, { forwardRef } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { ClassNameComponent } from "../../interfaces/common";
import { Input } from "../Input";

interface FieldComponent extends ClassNameComponent, UseFormRegisterReturn {
	label: string;
	error?: FieldError;
	inputClassName?: string;
	errorClassName?: string;
}

export const Field = forwardRef<HTMLInputElement, FieldComponent>(
	({ error, className, inputClassName, errorClassName, ...input }, ref) => {
		return (
			<div className={className}>
				{error && <p className={errorClassName}>{error.message}</p>}
				<Input className={inputClassName} {...input} ref={ref} />
			</div>
		);
	}
);
