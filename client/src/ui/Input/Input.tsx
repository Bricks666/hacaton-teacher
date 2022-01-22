import React, { forwardRef, HTMLInputTypeAttribute, ReactText } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { ClassNameComponent } from "../../interfaces/common";

interface InputComponent extends UseFormRegisterReturn, ClassNameComponent {
	type?: HTMLInputTypeAttribute;
	label: ReactText;
}

export const Input = forwardRef<HTMLInputElement, InputComponent>(
	({ className, label, type, ...fieldControls }, ref) => {
		return (
			<label className={className}>
				{label}
				<input {...fieldControls} type={type} ref={ref} />
			</label>
		);
	}
);
