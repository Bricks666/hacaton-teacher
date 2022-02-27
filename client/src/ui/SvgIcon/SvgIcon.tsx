import classNames from "classnames";
import React, { FC } from "react";
import { ClassNameProps } from "../../interfaces/common";

import SvgIconStyle from "./SvgIcon.module.css";

type Size = "small" | "medium" | "large";

interface SvgIconProps extends ClassNameProps {
	readonly viewBox: string;
	readonly size?: Size;
}

export const SvgIcon: FC<SvgIconProps> = ({
	children,
	className,
	viewBox,
	size = "medium",
}) => {
	const classes = classNames(
		SvgIconStyle.icon,
		SvgIconStyle[`icon--${size}`],
		className
	);
	return (
		<svg
			className={classes}
			viewBox={viewBox}
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			{children}
		</svg>
	);
};
