import classNames from "classnames";
import React, {
	forwardRef,
	HTMLInputTypeAttribute,
	PropsWithChildren,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { ClassNameProps } from "../../interfaces/common";

import InputStyle from "./Input.module.css";

interface InputComponent extends UseFormRegisterReturn, ClassNameProps {
	readonly type?: HTMLInputTypeAttribute;
	readonly inputClassName?: string;
	readonly placeholder?: string;
}

export const Input = forwardRef<
	HTMLInputElement,
	PropsWithChildren<InputComponent>
>(({ className, children, type, inputClassName, ...fieldControls }, ref) => {
	return (
		<div className={classNames(InputStyle.wrapper, className)}>
			<input
				className={classNames(InputStyle.input, inputClassName)}
				{...fieldControls}
				type={type}
				ref={ref}
				id={fieldControls.name}
			/>
			<label className={InputStyle.label} htmlFor={fieldControls.name}>
				{children}
			</label>
		</div>
	);
});
