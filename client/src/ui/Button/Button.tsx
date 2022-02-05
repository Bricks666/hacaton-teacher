import classNames from "classnames";
import React, { FC, MouseEventHandler } from "react";
import { Link, Path } from "react-router-dom";
import { ClassNameComponent } from "../../interfaces/common";

import ButtonStyle from "./Button.module.css";

type ButtonType = "submit" | "reset" | "button" | "link";
type Color = "primary" | "secondary" | "monotype";
type Type = "common" | "listed";

interface ButtonComponent extends ClassNameComponent {
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
	type = "common",
}) => {
	const classes = classNames(
		ButtonStyle.button,
		ButtonStyle[`button--${color}`],
		ButtonStyle[`button--${type}`],
		className
	);

	if (buttonType === "link") {
		if (!to) {
			throw new Error("to must be provided");
		}

		return (
			<Link className={classNames(classes, ButtonStyle.button__link)} to={to}>
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
