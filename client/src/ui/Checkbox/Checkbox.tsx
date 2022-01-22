import React, { forwardRef, ReactText } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { ClassNameComponent } from "../../interfaces/common";

interface CheckboxComponent extends ClassNameComponent, UseFormRegisterReturn {
	label: ReactText;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxComponent>(
	({ className, label, ...rest }, ref) => {
		return (
			<label className={className}>
				{label}
				<input type="checkbox" {...rest} ref={ref} />
			</label>
		);
	}
);
