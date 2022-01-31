import classNames from "classnames";
import React, {
	forwardRef,
	HTMLInputTypeAttribute,
	PropsWithChildren,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { ClassNameComponent } from "../../interfaces/common";

import InputStyle from "./Input.module.css";

interface InputComponent extends UseFormRegisterReturn, ClassNameComponent {
	readonly type?: HTMLInputTypeAttribute;
}

export const Input = forwardRef<
	HTMLInputElement,
	PropsWithChildren<InputComponent>
>(({ className, children, type, ...fieldControls }, ref) => {
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
				{children}
			</label>
		</div>
	);
});
