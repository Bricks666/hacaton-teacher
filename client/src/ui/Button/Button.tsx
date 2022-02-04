import classNames from "classnames";
import React, { FC, MouseEventHandler } from "react";
import { Link, Path } from "react-router-dom";
import { ClassNameComponent } from "../../interfaces/common";

import ButtonStyle from "./Button.module.css";

type ButtonType = "submit" | "reset" | "button" | "link";
type Color = "orange" | "yellow";

interface ButtonComponent extends ClassNameComponent {
	readonly onClick?: MouseEventHandler<HTMLButtonElement>;
	readonly type?: ButtonType;
	readonly disabled?: boolean;
	readonly to?: string | Partial<Path>;
	readonly color?: Color;
}

export const Button: FC<ButtonComponent> = ({
	className,
	onClick,
	disabled,
	children,
	to,
	type = "button",
	color = "orange",
}) => {
	const classes = classNames(
		ButtonStyle.button,
		ButtonStyle[`button--${color}`],
		className
	);

	if (type === "link") {
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
			type={type}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
