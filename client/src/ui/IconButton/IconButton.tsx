import React, { FC, MouseEventHandler } from "react";
import classNames from "classnames";
import { Link, To } from "react-router-dom";
import { ClassNameProps } from "../../interfaces/common";

import IconButtonStyle from "./IconButton.module.css";

interface IconButtonComponent extends ClassNameProps {
	readonly type?: "round" | "rectangle";
	readonly onClick?: MouseEventHandler;
	readonly color?: "primary" | "third" | "monotype" | "transparent";
	readonly to?: To;
	readonly disabled?: boolean;
	readonly size?: "small" | "medium" | "large";
}

export const IconButton: FC<IconButtonComponent> = ({
	className,
	to,
	onClick,
	disabled,
	children,
	type = "round",
	size = "medium",
	color = "transparent",
}) => {
	const classes = classNames(
		IconButtonStyle.button,
		IconButtonStyle[`button--${type}`],
		IconButtonStyle[`button--${size}`],
		IconButtonStyle[`button--${color}`],
		className
	);
	if (to) {
		return <Link className={classes} to={to} />;
	}

	return (
		<button className={classes} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};
