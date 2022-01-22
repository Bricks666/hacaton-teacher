import React, { FC, MouseEventHandler } from "react";
import { ClassNameComponent } from "../../interfaces/common";

type ButtonType = "submit" | "reset" | "button";

interface ButtonComponent extends ClassNameComponent {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	type?: ButtonType;
	disabled?: boolean;
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
			className={className}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
