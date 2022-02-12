import classNames from "classnames";
import React, { forwardRef, PropsWithChildren } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { ClassNameProps } from "../../interfaces/common";

import TextareaStyle from "./Textarea.module.css";

interface TextareaComponent extends ClassNameProps, UseFormRegisterReturn {
	readonly placeholder?: string;
}

export const Textarea = forwardRef<
	HTMLTextAreaElement,
	PropsWithChildren<TextareaComponent>
>(({ className, children, ...textarea }, ref) => {
	return (
		<label className={classNames(TextareaStyle.label, className)}>
			{children}
			<textarea className={TextareaStyle.textarea} {...textarea} ref={ref} />
		</label>
	);
});
