import classNames from "classnames";
import React, { FC, memo, MouseEventHandler } from "react";
import { Link, Path } from "react-router-dom";
import { ClassNameProps } from "../../interfaces/common";

import ButtonStyle from "./Button.module.css";

type ButtonType = "submit" | "reset" | "button";
type Color = "primary" | "secondary" | "monotype";
type Type = "rounded" | "text" | "round" | "rectangle";

interface ButtonComponent extends ClassNameProps {
	readonly onClick?: MouseEventHandler<HTMLButtonElement>;
	readonly buttonType?: ButtonType;
	readonly disabled?: boolean;
	readonly to?: string | Partial<Path>;
	readonly color?: Color;
	readonly type?: Type;
}

export const Button: FC<ButtonComponent> = memo(
	({
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

		if (to) {
			const isCommonRef = typeof to === "string" && /\bhttps?|\bwww/.test(to);
			/* Без второй проверки на строку TS поему то выдает ошибку типа */
			if (isCommonRef && typeof to === "string") {
				return (
					<a className={classes} href={to} target="_blank" rel="noreferrer">
						{children}
					</a>
				);
			}
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
	}
);
