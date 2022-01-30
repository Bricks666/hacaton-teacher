import classNames from "classnames";
import React, { forwardRef, ReactText } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { ClassNameComponent } from "../../interfaces/common";

import CheckboxStyle from "./Checkbox.module.css";

interface CheckboxComponent extends ClassNameComponent, UseFormRegisterReturn {
	readonly label: ReactText;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxComponent>(
	({ className, label, ...rest }, ref) => {
		return (
			<div className={className}>
				<input
					className={classNames("visibility-hidden", CheckboxStyle.input)}
					type="checkbox"
					id={rest.name}
					{...rest}
					ref={ref}
				/>
				<label className={CheckboxStyle.label} htmlFor={rest.name}>
					{label}
				</label>
			</div>
		);
	}
);
