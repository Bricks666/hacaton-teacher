import classNames from "classnames";
import React, { FC, MouseEventHandler } from "react";
import { ClassNameComponent } from "../../interfaces/common";

import ButtonStyle from "./Button.module.css";

type ButtonType = "submit" | "reset" | "button";

interface ButtonComponent extends ClassNameComponent {
	readonly onClick?: MouseEventHandler<HTMLButtonElement>;
	readonly type?: ButtonType;
	readonly disabled?: boolean;
}

export const Button: FC<ButtonComponent> = ({
	className,
	onClick,
	type = "button",
	disabled,
	children,
}) => {
	return (
		<button
			className={classNames(ButtonStyle.button, className)}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
