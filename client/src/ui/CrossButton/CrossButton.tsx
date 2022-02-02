import classNames from "classnames";
import React, { ButtonHTMLAttributes, FC } from "react";
import { ClassNameComponent } from "../../interfaces/common";

import CrossButtonStyle from "./CrossButton.module.css";

interface CrossButtonComponent
	extends ClassNameComponent,
		Readonly<Partial<ButtonHTMLAttributes<HTMLButtonElement>>> {}

export const CrossButton: FC<CrossButtonComponent> = ({
	className,
	...button
}) => {
	return (
		<button
			className={classNames(CrossButtonStyle.crossButton, className)}
			{...button}
		/>
	);
};
