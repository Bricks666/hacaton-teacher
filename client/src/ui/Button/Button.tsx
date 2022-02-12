import classNames from "classnames";
import React, { FC, MouseEventHandler } from "react";
import { Link, Path } from "react-router-dom";
import { ClassNameProps } from "../../interfaces/common";

import ButtonStyle from "./Button.module.css";

type ButtonType = "submit" | "reset" | "button";
type Color = "primary" | "secondary" | "monotype";
type Type = "rounded" | "text" | "round";

interface ButtonComponent extends ClassNameProps {
	readonly onClick?: MouseEventHandler<HTMLButtonElement>;
	readonly buttonType?: ButtonType;
	readonly disabled?: boolean;
	readonly to?: string | Partial<Path>;
	readonly color?: Color;
	readonly type?: Type;
}

export const Button: FC<ButtonComponent> = ({
	className,
	onClick,
	disabled,
	children,
	to,
	buttonType = "button",
	color = "primary",
	type = "rounded",
}) => {
	const classes = classNames(
		ButtonStyle.button,
		ButtonStyle[`button--${color}`],
		ButtonStyle[`button--${type}`],
		className
	);
	console.log(className, children);

	if (to) {
		return (
			<Link className={classes} to={to}>
				{children}
			</Link>
		);
	}

	return (
		<button
			className={classes}
			onClick={onClick}
			type={buttonType}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
