import classNames from "classnames";
import React, { forwardRef, HTMLInputTypeAttribute, ReactText } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { ClassNameComponent } from "../../interfaces/common";

import InputStyle from "./Input.module.css";

interface InputComponent extends UseFormRegisterReturn, ClassNameComponent {
	readonly type?: HTMLInputTypeAttribute;
	readonly label: ReactText;
}

export const Input = forwardRef<HTMLInputElement, InputComponent>(
	({ className, label, type, ...fieldControls }, ref) => {
		return (
			<div className={classNames(InputStyle.wrapper, className)}>
				<input
					className={InputStyle.input}
					{...fieldControls}
					type={type}
					ref={ref}
					id={fieldControls.name}
				/>
				<label className={InputStyle.label} htmlFor={fieldControls.name}>
					{label}
				</label>
			</div>
		);
	}
);
